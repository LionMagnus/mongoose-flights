const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    new: newTicket,
    create,
};

function newTicket(req, res) {
    res.render('tickets/new', {
        flightId: req.params.id,
        title: 'Add ticket'
    });
}

function create(req, res) {
    const ticket  = req.body;
    ticket.flight = req.params.id;
    Ticket.create(req.body, function (err, ticket) {
      res.redirect(`/flights/${req.params.id}`);
    });
}