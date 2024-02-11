import fetch from 'node-fetch';
import fs from 'fs';
import iconv from 'iconv-lite';

const url = "http://lib.fmpm.uca.ma/lib/opac_css/index.php?lvl=more_results&mode=extended&tab=catalog";

// Form data
const data = new URLSearchParams();
data.append('search[]', 'f_24');
data.append('inter_0_f_24', '');
data.append('op_0_f_24', 'STARTWITH');
data.append('field_0_f_24[]', 'th');
data.append('page', '6');
data.append('nb_per_page_custom', '200');
data.append('filtre_compare', '');
data.append('catalog_page', '6');
data.append('affiliate_page', '1');

// Headers
const headers = {
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'Accept-Encoding': 'gzip, deflate',
    'Accept-Language': 'fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7',
    'Cache-Control': 'max-age=0',
    'Content-Type': 'application/x-www-form-urlencoded',
    'Cookie': 'PhpMyBibli-OPACDB=bibliopmb; PmbOpac-SESSNAME=PmbOpac; PmbOpac-SESSID=4099100153;PHPSESSID=jcr81348g4sqjouobk8ntc7tb4',
    'Host': 'lib.fmpm.uca.ma',
    'Origin': 'http://lib.fmpm.uca.ma',
    'Referer': 'http://lib.fmpm.uca.ma/lib/opac_css/index.php?lvl=more_results&mode=extended&tab=catalog',
    'Upgrade-Insecure-Requests': '1',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
};

// Make the POST request
fetch(url, {
    method: 'POST',
    headers: headers,
    body: data
})
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP request failed with status ${response.status}`);
        }
        // Convert response buffer to UTF-8
        return response.buffer().then(buffer => {
            const utf8String = iconv.decode(buffer, "ISO-8859-1").replace(//g, "'");
            return utf8String;
        });
    })
    .then(body => {
        // Save the response to a file
        fs.writeFileSync("file.html", body, 'utf-8');
        console.log('File saved successfully.');
    })
    .catch(error => {
        console.error('Error:', error.message);
    });
