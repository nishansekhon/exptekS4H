#!/bin/bash

# WWW to Non-WWW Redirect Troubleshooting Script
# This script checks if the redirect is working correctly

echo "==============================================="
echo "WWW to Non-WWW Redirect Troubleshooting"
echo "==============================================="
echo ""

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Test 1: Check DNS Resolution
echo "1. Checking DNS Resolution..."
echo "-------------------------------------------"
echo "Root domain (exptek.com):"
dig +short exptek.com A
echo ""
echo "WWW subdomain (www.exptek.com):"
dig +short www.exptek.com A
echo ""

# Test 2: Check HTTP Response
echo "2. Checking HTTP Response for www..."
echo "-------------------------------------------"
www_response=$(curl -s -o /dev/null -w "%{http_code}" https://www.exptek.com)
echo "Status Code: $www_response"

if [ "$www_response" == "301" ] || [ "$www_response" == "302" ]; then
    echo -e "${GREEN}✓ Redirect is working!${NC}"
else
    echo -e "${RED}✗ No redirect detected (Status: $www_response)${NC}"
fi
echo ""

# Test 3: Check Redirect Location
echo "3. Checking Redirect Location Header..."
echo "-------------------------------------------"
location=$(curl -s -I https://www.exptek.com | grep -i "location:" | cut -d' ' -f2 | tr -d '\r')
echo "Redirect Location: $location"

if [[ "$location" == "https://exptek.com"* ]]; then
    echo -e "${GREEN}✓ Redirects to correct domain!${NC}"
else
    echo -e "${RED}✗ Redirects to wrong location or no redirect${NC}"
fi
echo ""

# Test 4: Check if Content is Different
echo "4. Checking if Content Differs..."
echo "-------------------------------------------"
www_content=$(curl -sL https://www.exptek.com | head -c 500)
root_content=$(curl -sL https://exptek.com | head -c 500)

if [ "$www_content" == "$root_content" ]; then
    echo -e "${GREEN}✓ Content is the same (after following redirects)${NC}"
else
    echo -e "${RED}✗ Content differs between www and non-www${NC}"
    echo "This suggests two separate deployments!"
fi
echo ""

# Test 5: Check SSL Certificate
echo "5. Checking SSL Certificate..."
echo "-------------------------------------------"
echo "WWW Certificate:"
echo | openssl s_client -servername www.exptek.com -connect www.exptek.com:443 2>/dev/null | openssl x509 -noout -subject -dates 2>/dev/null
echo ""
echo "Root Certificate:"
echo | openssl s_client -servername exptek.com -connect exptek.com:443 2>/dev/null | openssl x509 -noout -subject -dates 2>/dev/null
echo ""

# Test 6: Full Redirect Chain
echo "6. Full Redirect Chain..."
echo "-------------------------------------------"
curl -sL -w "%{url_effective}\n" -o /dev/null https://www.exptek.com
echo ""

# Test 7: Check Common Paths
echo "7. Testing Common Paths..."
echo "-------------------------------------------"
paths=("/services" "/about" "/contact")
for path in "${paths[@]}"; do
    status=$(curl -s -o /dev/null -w "%{http_code}" "https://www.exptek.com$path")
    final_url=$(curl -sL -w "%{url_effective}\n" -o /dev/null "https://www.exptek.com$path")
    echo "$path → Status: $status → Final: $final_url"
done
echo ""

# Summary
echo "==============================================="
echo "DIAGNOSIS SUMMARY"
echo "==============================================="
echo ""

if [ "$www_response" == "301" ] && [[ "$location" == "https://exptek.com"* ]]; then
    echo -e "${GREEN}✓ REDIRECT IS WORKING CORRECTLY${NC}"
    echo "The www subdomain properly redirects to non-www."
else
    echo -e "${RED}✗ REDIRECT IS NOT WORKING${NC}"
    echo ""
    echo "Possible issues:"
    echo "1. DNS points to different servers"
    echo "2. Two separate deployments exist"
    echo "3. Hosting platform not configured correctly"
    echo "4. CDN cache serving old content"
    echo ""
    echo "Recommended actions:"
    echo "1. Check hosting platform domain settings"
    echo "2. Verify DNS records point to same server"
    echo "3. Consolidate to one deployment"
    echo "4. Purge CDN cache"
    echo ""
    echo "See: /app/WWW_REDIRECT_EMERGENCY_FIX.md for detailed instructions"
fi

echo ""
echo "==============================================="
