import agent from 'superagent-bluebird-promise'


export const searchTicketMaster = query => {
  let headers = {
    'Accept-Encoding': 'gzip, deflate, sdch',
    'Accept-Language': 'en-US,en;q=0.8,sv;q=0.6',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36',
    'Accept': 'text/javascript, text/html, application/xml, text/xml, */*',
    'Referer': 'http://www.ticketmaster.com/',
    'X-Requested-With': 'XMLHttpRequest',
    'Connection': 'keep-alive',
    'X-Prototype-Version': '1.7',
    'Cookie': 'GEORAN=1; NPDMA=358; CMPS=Qqn4Pv/OOnYs3L35v2V6CFSZ4sD+wyjhA4qcgIxJeZFsqcFre3YNraX+2D/yekel/lv3Ojaz8d4=; ak_bmsc=E62126B39DB4641BA516746343353AF117DBA17DE710000030B4365937096176~plDzhGj4ys/1HXS1tWY8h7/sUsrOdKnJNrZIMXv1Yrf27hXtN64jDDyPaTyugtx8Q7pY3+1mEX4SFkMR0DB4jfKeaUSVv/ppzZwA0PM+Ml4agBCgtLhwr6h0cJrSWPQvwD1zM0mtCsddAF6p0bUN/Y4kgN2hLQsh+N88yMI2DyvjnRFSsYLtOHUGnmkm7b67o626tjyouAGI9x9Qpcq9BBlAx3cVfgbnCVa95r5s9n1e4=; mt.pc=2.1; mt.g.2f013145=2.548288737.1496757297344; ipe_s=69769fc6-e3e7-2f46-aa9e-aea70323cc42; m_edp_active_mode=classic; _tm_event_name=The Mountain Goats; MARKET_NAME=R3JlYXRlciBQaGlsYWRlbHBoaWEgQXJlYQ%3D%3D; MARKET_ID=18; ms_visitorid=b17010c4-271c-b656-aa31-52a9604cdb12; csrf_token=00c9c9e0f51a478702899db479ef5c4f; TM_SEARCH_HISTORY=%5B%7B%22search%22%3A%22luke%2Bbryan%22%7D%2C%7B%22search%22%3A%22monster+jam%22%7D%5D; _sdsat_session id=ns9E4kBsztY_DDNltveUOu0wokM479RJd2E4TE4Uvmqac8H8GoYeZhQ4gMnboUKlGUOKcOPwqADImF2j; SID=K-sp4AYyX3z-saDw4YzQrEouxxdeEj_7eFEZWDL0gD46zCKZjAa-ibxmX2HGREJiD4N97eIFXjSuBh2v; BID=gt-16QKw4NEhbc2v80qkpAG_QqZsq9PE8swPFHb-x3LCIPhYCNwjK3bGQz0KAuXeMTFPSp0RU28IbDjPlbL3; TMSID=K-sp4AYyX3z-saDw4YzQrEouxxdeEj_7eFEZWDL0gD46zCKZjAa-ibxmX2HGREJiD4N97eIFXjSuBh2v; _E=%7B%7D; bm_sv=D24832D50D9CAF3A40C0D0183C18F647~45S9/gnwcAWUJ0I+8Iykn4lcaU0VmaZIo/2+DROU/krL2qD5Sh8XxpVt0Qq/DKeUjlZLKR2QsKXkAH1ROgZGhS7ttv9Yz2bJS8qqdImnQDv/LKgEpTZFcSjxfY2WeIZ8Nle1OD/43ROAdkExN3csn/ISLfR33/QvFA7YcCpx984=; mt.v=2.548288737.1496757297344; _dc_gtm_UA-60025178-1=1; m_enteredHome=true; m_fanSegment=true; _ga=GA1.2.1208085739.1496757299; _gid=GA1.2.1456027870.1496757301; _dc_gtm_UA-60025178-2=1; TM_PIXEL={"_dvs":"0:j3lmnhdb:Xc8TwXrtkTm2xFiVI4noS7sKjFjOWKog","_dvp":"0:j3lmnhdb:Rx~u5mDYEG0g3UdDSkJFP8xeEhwIpj42"}; _ceg.s=or4sx9; _ceg.u=or4sx9; s_vi=[CS]v1|2C9B5A190507FF5C-60000114A0018876[CE]; ipe.16596.pageViewedCount=4; AB=B; GEO_OMN=ba; NDMA=358; LANGUAGE=en-us; SRCHPID=2; s_pers=%20s_vnum%3D1498881600864%2526vn%253D3%7C1498881600864%3B%20s_fid%3D70AB0226AE7C4172-3CEC788EFAF576E3%7C1559833979460%3B%20gpv1%3Dno%2520value%7C1496763779463%3B%20s_vs%3D1%7C1496763779469%3B%20gpv%3Dno%2520value%7C1496763779477%3B%20s_invisit%3Dtrue%7C1496763779486%3B%20s_visit%3D1%7C1496763779492%3B; _dvs=0:j3lmnhdb:Xc8TwXrtkTm2xFiVI4noS7sKjFjOWKog; _dvp=0:j3lmnhdb:Rx~u5mDYEG0g3UdDSkJFP8xeEhwIpj42; s_sess=%20s_ria%3Dflash%2520not%2520detected%257C%3B%20currentEventList%3D%253B0D0052BFAC3887D2%253B%253B%253Bevent74%253D0%257Cevent75%253D0%3B%20s_stv%3Dmonster%2520jam%3B%20cpcbrate%3D1%3B%20s_ppvl%3DTM_US%25253A%252520Home%252C5%252C37%252C778%252C1440%252C778%252C1440%252C900%252C1%252CL%3B%20s_sq%3D%3B%20s_cc%3Dtrue%3B%20s_ppv%3Dhttp%25253A%252F%252Fwww.ticketmaster.com%252F%252C37%252C37%252C778%252C1440%252C356%252C1440%252C900%252C1%252CL%3B'
  }
  let url = `http://www.ticketmaster.com/json/search/suggest?q=${query.split(' ').join('+')}&nsse=2&nssmid=0`
  return agent
          .get(url)
          .set(headers)
          .then(res => JSON.parse(res.text))
          .catch(err => err)
}