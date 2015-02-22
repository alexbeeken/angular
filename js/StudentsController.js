studentRoster.controller('StudentsCtrl', function StudentsCtrl($scope) {
  $scope.students = [];

//
  $scope.addStudent = function() {
    // pushes the scope into the array called students
    $scope.students.push({ name: $scope.studentName });
    // then reset studentname to null so the form is clear
    $scope.studentName = null;
  };
  // we're calling the method on $scope, passing in the student as an argument
  $scope.deleteStudent = function(student) {
    // find the index of the studnet in the students array
    var index = $scope.students.indexOf(student)
    // then call the JS splice method on it, index = where to start and 1 is number to delete
    $scope.students.splice(index, 1);
  };
});

// two way data binding
// we want to make it so that a user doesn't have to leave the page
// in order to edit a students name
// we don't need to rewrite anything in our controller
