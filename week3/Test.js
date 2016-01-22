

document.write("Example 1: Function Hoisting" + '</br>' + '</br>');

document.write("This function prints out 'var test1' which is equal 5 * 5. The function is defined after it is called." + '</br>'+ '</br>');


function1();

function function1()
{
    var test1;

    test1 = 5 * 5;
    document.write(test1 + '</br>');




}

document.write("If you see a 25 printed above it means that it worked" + '</br>' + '</br>');


document.write("Example 2: Calling a function before it ias assigned to a variable " + '</br>' + '</br>');



test3();   //comment this out to print the value

function function2()
{
    var test2;
    test2 = 10 * 10;
    document.write(test2 + '</br>');

}

var test3 = function2();

document.write("You should not see anything above because it didnt work" + '</br>');
document.write("Comment out the the call to test3() and it should work");