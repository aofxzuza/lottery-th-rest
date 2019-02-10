const cheerio = require('cheerio');
const requestPromise = require('request-promise-native');
const LOTTERY_URL = 'https://www.lottery.co.th';

const lottery_select_api = {
    method: 'GET',
    uri: LOTTERY_URL + '/select-api',
    transform: function (body) {
        return cheerio.load(body);
    }
};

exports.get_lottery_rounds = async function get_lottery_rounds() {
    let $ = await requestPromise(lottery_select_api);
    let rounds = scraping_lotto_rounds($);
    return [rounds];
}

const lotto_regex = /^\/lotto\//
function scraping_lotto_rounds($) {
    let rounds = [];
    $('option').each(function (i, elem) {
        let round = {
            text: $(this).text() ? $(this).text() : '',
            value: $(this).attr('value') ? $(this).attr('value').replace(lotto_regex, '') : '',
        }
        rounds.push(round);
    });
    return rounds;
}
