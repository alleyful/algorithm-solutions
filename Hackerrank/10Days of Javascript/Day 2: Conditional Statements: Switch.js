function getLetter(s) {
    const firstCharacter = s.slice(0, 1);
    let letter;
    // Write your code here
    switch (firstCharacter) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            letter = 'A';
            break;

        case 'b':
        case 'c':
        case 'd':
        case 'f':
        case 'g':
            letter = 'B';
            break;

        case 'h':
        case 'j':
        case 'k':
        case 'l':
        case 'm':
            letter = 'C';
            break;

        default:
            letter = 'D';
            break;
    }
    return letter;
}
