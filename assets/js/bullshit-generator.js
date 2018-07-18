// Could use this, to add more words to the dictionary: http://www.bullshitbingo.net/cards/bullshit/

var senderNames = ["Foo", "Bar"];
var recipientNames = ["Andreas", "Colin", "Iida", "James", "Kacper", "Ryan", "Sabria", "Simon", "Vlad"];

var startersFirst = ["Please", "Kindly", "Amiably"];
var nounsFirst = ["API", "database", "SDLC", "production servers", "rollout", "virtualization"];
var verbsFirst = ["leverage", "write", "drill down", "overwrite", "override", "embed"];

var startersSecond = ["This", "Doing so"];
var nounsSecond = ["action items", "quarterly expectations", "issues", "vertical growth", "spreadsheets", "blockers", "emerging markets"];
var verbsSecond = ["integrate", "evaluate", "extrapolate", "streamline", "establish ownership of"];

var startersThird = ["Finally", "Last but not least", "Lastly"];
var nounsThird = ["client commitments", "SWOT analysis", "GAP analysis", "metrics", "ingest automation", "omni-channel experience"];
var verbsThird = ["report on", "query", "establish", "data mine", "monetize on"];

var determiners = ["the", "our", "the", "our", "the", "our", "the", "our", "the aforementioned", "the hereinafter"]; /* 80% simple determiners, 20% complex determiners */
var adverbs = ["gracefully", "precisely", "continuously", "diligently", "proactively"];
var prepositions = ["down", "into", "up", "on", "upon", "below", "above", "through", "across", "towards"];

var reasons = ["so that we can", "which would enable us to", "which in turn would", "which is a mission critical factor if we want to", "which enables thinking outside the box if we wish to"];
var probabilities = ["would", "could", "should"];
var times = ["going forward", "in the next trimester", "for the foreseeable future", "for the upcoming quarter", "by the end of the financial year"];
var conditionalStart = ["if you could", "if you would be so kind as to"];
var conditionalEnd = ["that would be great", "that would be highly appreciated"];

var openings = ["Dear", "Hi", "Hello", "Greetings"];
var closings = ["Kind Regards", "Best Regards", "Sincerely"];

function randomWord(wordSet, ending) {
    var randomSeedArray = [];

    for (i = 0; i < 100; i++) {
        randomSeedArray[i] = Math.floor(Math.random() * wordSet.length);
    }

    if (ending == true) {
        return wordSet[randomSeedArray[Math.floor(Math.random() * randomSeedArray.length)]];
    } else {
        return wordSet[randomSeedArray[Math.floor(Math.random() * randomSeedArray.length)]] + " ";
    }
}

function generateContent() {
    var firstParagraph = randomWord(startersFirst) + randomWord(verbsFirst) + randomWord(determiners) + randomWord(nounsFirst) + randomWord(prepositions) +
        randomWord(determiners) + randomWord(nounsFirst) + randomWord(reasons) + randomWord(adverbs) + randomWord(verbsFirst) + randomWord(determiners) +
        randomWord(nounsFirst) + randomWord(prepositions) + randomWord(determiners) + randomWord(nounsFirst) + randomWord(times, true) + ".";

    var secondParagraph = randomWord(startersSecond) + randomWord(probabilities) + randomWord(adverbs) + randomWord(verbsSecond) + randomWord(determiners) +
        randomWord(nounsSecond) + randomWord(prepositions) + randomWord(determiners) + randomWord(nounsSecond) + randomWord(times, true) + ", " +
        randomWord(reasons) + randomWord(adverbs) + randomWord(verbsSecond) + randomWord(determiners) + randomWord(nounsSecond) + randomWord(prepositions) +
        randomWord(determiners) + randomWord(nounsSecond, true) + ".";

    var thirdParagraph = randomWord(startersThird, true) + ", " + randomWord(conditionalStart) + randomWord(adverbs) + randomWord(verbsThird) +
        randomWord(determiners) + randomWord(nounsThird) + randomWord(times) + randomWord(reasons) + randomWord(verbsThird) + randomWord(determiners) +
        randomWord(nounsThird, true) + ", " + randomWord(conditionalEnd, true) + ".";

    content = firstParagraph + "<br><br>" + secondParagraph + "<br><br>" + thirdParagraph;
    return content;
};

function generateEmail() {
    document.getElementById('bullshit').innerHTML = randomWord(openings) + randomWord(recipientNames, true) + "," + "<br><br>" + generateContent() + "<br><br>" + randomWord(closings, true) + ",<br>" + randomWord(senderNames);
};

generateEmail()