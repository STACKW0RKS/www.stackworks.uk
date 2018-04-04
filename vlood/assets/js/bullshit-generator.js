// Could use this, to add words to the dictionary: http://www.bullshitbingo.net/cards/bullshit/
// Don't forget: blocker, extrapolate...

var senderNames = ["Foo", "Bar"];
var recipientNames = ["Andreas", "Iida", "Kacper", "Ryan", "Vlad"];

var startersFirst = ["Please", "Kindly", "Amiably"];
var nounsFirst = ["API", "database", "SDLC", "production servers", "rollout"];
var verbsFirst = ["leverage", "write", "drill down", "overwrite", "override", "embed"];

var startersSecond = ["This", "Doing so"];
var nounsSecond = ["action items", "quarterly expectations", "issues", "vertical growth", "spreadsheets"];
var verbsSecond = ["integrate", "evaluate"];

var startersThird = ["Finally", "Last but not least", "Lastly"];
var nounsThird = ["client commitments", "SWOT analysis", "GAP analysis"];
var verbsThird = ["report on", "query", "establish"];

var determiners = ["the", "our"];
var adverbs = ["gracefully", "precisely", "continuously", "diligently"];
var prepositions = ["down", "into", "up", "on", "upon", "below", "above", "through", "across", "towards"];

var reasons = ["so that we can", "which would enable us to", "which in turn would"];
var probabilities = ["would", "could", "should"];
var times = ["going forward", "in the next trimester", "for the foreseeable future"];
var conditionalStart = ["if you could", "if you would be so kind as to"];
var conditionalEnd = ["that would be great", "that would be highly appreciated"];

var openings = ["Dear", "Hi", "Hello", "Greetings"];
var closings = ["Kind Regards", "Best Regards", "Sincerely"];

function randomWord(wordSet, ending) {
    if (ending == true) {
        return wordSet[Math.floor(Math.random() * wordSet.length)];
    } else {
        return wordSet[Math.floor(Math.random() * wordSet.length)] + " ";
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

generateEmail();