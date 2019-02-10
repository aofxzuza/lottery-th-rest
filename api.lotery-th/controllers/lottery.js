const lottery_service = require('../services/lottery-service')
exports.get_lottery_rounds = get_lottery_rounds;

async function get_lottery_rounds(req, res) {
    try {
        let rounds = await lottery_service.get_lottery_rounds();
        res.json({
            rounds: rounds
        });
    } catch (error) {
        console.error(error)
        res.status(500);
    }
}
