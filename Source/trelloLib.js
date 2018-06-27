var request = require("request-promise");

var TrelloKey = "TRELLOKEY"
var TrelloToken = "TRELLOTOKEN"

exports.GetBoardID = async function(id){
    var BoardID;

    var options = { 
        method: 'GET',
        url: `https://api.trello.com/1/boards/${id}`,
        key: TrelloKey,
        token: TrelloToken
    };

    await request(options, function (error, response, body) {
        if (error) throw new Error(error);
        BoardID = JSON.parse(body).id
    });

    return BoardID
}