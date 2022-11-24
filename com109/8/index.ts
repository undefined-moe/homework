const json = '{"age":30}'; // incomplete data
try {
    const user = JSON.parse(json); // <-- no errors
    if (!user.name) {
        throw new SyntaxError('Incomplete data: no name'); // (*)
    }
    alert(user.name);
} catch (e) {
    alert('Error caught');
}
