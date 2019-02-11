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

function scraping_lotto_rounds($) {
    let rounds = [];
    $('option').each(function (i, elem) {
        let round = $(this).attr('value') ? lotto_to_valid_date($(this).attr('value')) : '';
        rounds.push(round);
    });
    return rounds;
}

const lotto_regex = /^\/lotto\//

function lotto_to_valid_date(value) {
    try {
        let date = value.replace(lotto_regex, '');
        let date_arr = date.split('-');
        let day = date_arr[0].padStart(2, '0');
        let month = date_arr[1];
        let buddhist_year = date_arr[2];
        let christian_year = to_christian_year(buddhist_year)
        return `${christian_year}-${month}-${day}`;
    } catch (error) {
        console.log(error);
        return value;
    }
}

function to_christian_year(buddhist_year) {
    let full_buddist_year = buddhist_year.padStart(4, '25')
    let christian_year = parseInt(full_buddist_year) - 543;
    return christian_year;
}