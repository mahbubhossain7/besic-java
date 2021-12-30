
/*object muloto second beraket er modde thake {property name: p value, property name: p value.....}
*/


var student = {
    id:121, phone:1745, name:'Abir'
}
var student2 = {id:131, phone:457, name:'mahi'};

var phoneNum = student.id;
var phonenum = student2['name'];
var student3 = student;
student2.phone = 45462;   /*property change kora jay ai vabe */
student2.cinema = 'ogni2' /* notun kono property add kora jay ai vabe */
console.log(phoneNum);
console.log(phonenum);
console.log(student3);
console.log(student2);
