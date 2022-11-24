const age = +prompt('Input your age:')!;
if (age < 14) {
    document.write('Children');
} else if (age < 24) {
    document.write('Teens');
} else if (age < 40) {
    document.write('Youth');
} else if (age < 60) {
    document.write('Middle age');
} else document.write('Old age');
