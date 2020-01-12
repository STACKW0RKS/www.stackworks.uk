/* <![CDATA[ */

// Dataset Of UNICODE Characters
//=====================================================================================================

// Characters Going Upwards
var zalgo_up = [
    '\u030d', /*     ̍     */ '\u030e', /*     ̎     */ '\u0304', /*     ̄     */ '\u0305', /*     ̅     */
    '\u033f', /*     ̿     */ '\u0311', /*     ̑     */ '\u0306', /*     ̆     */ '\u0310', /*     ̐     */
    '\u0352', /*     ͒     */ '\u0357', /*     ͗     */ '\u0351', /*     ͑     */ '\u0307', /*     ̇     */
    '\u0308', /*     ̈     */ '\u030a', /*     ̊     */ '\u0342', /*     ͂     */ '\u0343', /*     ̓     */
    '\u0344', /*     ̈́     */ '\u034a', /*     ͊     */ '\u034b', /*     ͋     */ '\u034c', /*     ͌     */
    '\u0303', /*     ̃     */ '\u0302', /*     ̂     */ '\u030c', /*     ̌     */ '\u0350', /*     ͐     */
    '\u0300', /*     ̀     */ '\u0301', /*     ́     */ '\u030b', /*     ̋     */ '\u030f', /*     ̏     */
    '\u036e', /*     ͮ     */ '\u036f', /*     ͯ     */ '\u033e', /*     ̾     */ '\u035b', /*     ͛     */
    '\u0312', /*     ̒    */ '\u0313', /*     ̓     */ '\u0314', /*     ̔     */ '\u033d', /*     ̽     */
    '\u0309', /*     ̉     */ '\u0363', /*     ͣ     */ '\u0364', /*     ͤ     */ '\u0365', /*     ͥ     */
    '\u0366', /*     ͦ     */ '\u0367', /*     ͧ     */ '\u0368', /*     ͨ     */ '\u0369', /*     ͩ     */
    '\u036a', /*     ͪ     */ '\u036b', /*     ͫ     */ '\u036c', /*     ͬ     */ '\u036d', /*     ͭ     */
    '\u0346', /*     ͆     */ '\u031a'  /*     ̚     */
];

// Characters Staying In The Middle
var zalgo_mid = [
    '\u0315', /*     ̕     */ '\u031b', /*     ̛     */ '\u0340', /*     ̀     */ '\u0341', /*     ́     */
    '\u0358', /*     ͘     */ '\u0321', /*     ̡     */ '\u0322', /*     ̢     */ '\u0327', /*     ̧     */
    '\u0328', /*     ̨     */ '\u0334', /*     ̴     */ '\u0335', /*     ̵     */ '\u0336', /*     ̶     */
    '\u034f', /*     ͏     */ '\u035c', /*     ͜     */ '\u035d', /*     ͝     */ '\u035e', /*     ͞     */
    '\u035f', /*     ͟     */ '\u0360', /*     ͠     */ '\u0362', /*     ͢     */ '\u0338', /*     ̸     */
    '\u0337', /*     ̷     */ '\u0361', /*     ͡     */ '\u0489'  /*     ҉_   */
];

// Characters Going Downwards
var zalgo_down = [
    '\u0316', /*     ̖     */ '\u0317', /*     ̗     */ '\u0318', /*     ̘     */ '\u0319', /*     ̙     */
    '\u031c', /*     ̜     */ '\u031d', /*     ̝     */ '\u031e', /*     ̞     */ '\u031f', /*     ̟     */
    '\u0320', /*     ̠     */ '\u0324', /*     ̤     */ '\u0325', /*     ̥     */ '\u0326', /*     ̦     */
    '\u0329', /*     ̩     */ '\u032a', /*     ̪     */ '\u032b', /*     ̫     */ '\u032c', /*     ̬     */
    '\u032d', /*     ̭     */ '\u032e', /*     ̮     */ '\u032f', /*     ̯     */ '\u0330', /*     ̰     */
    '\u0331', /*     ̱     */ '\u0332', /*     ̲     */ '\u0333', /*     ̳     */ '\u0339', /*     ̹     */
    '\u033a', /*     ̺     */ '\u033b', /*     ̻     */ '\u033c', /*     ̼     */ '\u0345', /*     ͅ     */
    '\u0347', /*     ͇     */ '\u0348', /*     ͈     */ '\u0349', /*     ͉     */ '\u034d', /*     ͍     */
    '\u034e', /*     ͎     */ '\u0353', /*     ͓     */ '\u0354', /*     ͔     */ '\u0355', /*     ͕     */
    '\u0356', /*     ͖     */ '\u0359', /*     ͙     */ '\u035a', /*     ͚     */ '\u0323'  /*     ̣     */
];

//=====================================================================================================

// Returns An Integer Between 0 (Zero) And 'max'
function rand(max) {
    return Math.floor(Math.random() * max);
}

// Returns A Random Zalgo Character From 'array' 
function rand_zalgo(array) {
    var index = Math.floor(Math.random() * array.length);
    return array[index];
}

// Helper Functions
//=====================================================================================================

// Show/Hide Element with ID 'id'
function toggle(id) {
    if (document.getElementById(id).style.display == "none")
        document.getElementById(id).style.display = "block";
    else
        document.getElementById(id).style.display = "none";
}

// Assert Whether Character Is Zalgo Or Not
function is_zalgo_char(char) {
    var i;
    for (i = 0; i < zalgo_up.length; i++)
        if (char == zalgo_up[i])
            return true;
    for (i = 0; i < zalgo_down.length; i++)
        if (char == zalgo_down[i])
            return true;
    for (i = 0; i < zalgo_mid.length; i++)
        if (char == zalgo_mid[i])
            return true;
    return false;
}

// Generate Zalgo Text
//=====================================================================================================
function zalgo_textarea(id) {
    var p = document.getElementById(id);

    var txt = p.value;
    var newtxt = '';

    for (var i = 0; i < txt.length; i++) {
        if (is_zalgo_char(txt.substr(i, 1)))
            continue;

        var num_up;
        var num_mid;
        var num_down;

        // Add Regular Character
        newtxt += txt.substr(i, 1);

        // Assert Effect Intensity
        if (document.getElementById('zalgo_opt_mini').checked) {
            num_up = rand(8);
            num_mid = rand(2);
            num_down = rand(8);
        } else if (document.getElementById('zalgo_opt_normal').checked) {
            num_up = rand(16) / 2 + 1;
            num_mid = rand(6) / 2;
            num_down = rand(16) / 2 + 1;
        } else if (document.getElementById('zalgo_opt_maxi').checked) {
            num_up = rand(64) / 4 + 3;
            num_mid = rand(16) / 4 + 1;
            num_down = rand(64) / 4 + 3;
        }

        // Add Zalgo Characters
        if (document.getElementById('zalgo_opt_up').checked)
            for (var j = 0; j < num_up; j++)
                newtxt += rand_zalgo(zalgo_up);
        if (document.getElementById('zalgo_opt_mid').checked)
            for (var j = 0; j < num_mid; j++)
                newtxt += rand_zalgo(zalgo_mid);
        if (document.getElementById('zalgo_opt_down').checked)
            for (var j = 0; j < num_down; j++)
                newtxt += rand_zalgo(zalgo_down);
    }

    // Remove Children Of 'zalgo_container'
    var container = document.getElementById('zalgo_container');
    while (container.childNodes.length)
        container.removeChild(container.childNodes[0]);

    // Build Blocks For Each Line Of Text & Create <br> Elements
    var lines = newtxt.split("\n");
    for (var i = 0; i < lines.length; i++) {
        var n = document.createElement('text');
        n.innerHTML = lines[i];
        container.appendChild(n);
        var nl = document.createElement('br');
        container.appendChild(nl);
    }
}

/* ]]> */

function reset_options() {
    document.getElementById('zalgo_opt_up').checked = false;
    document.getElementById('zalgo_opt_mid').checked = true;
    document.getElementById('zalgo_opt_down').checked = true;

    document.getElementById('zalgo_opt_mini').checked = true;
    document.getElementById('zalgo_opt_normal').checked = false;
    document.getElementById('zalgo_opt_maxi').checked = false;
}