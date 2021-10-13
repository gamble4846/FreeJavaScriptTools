var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.check_symbols = true;
    $scope.check_numbers = true;
    $scope.check_lowercase = true;
    $scope.check_uppercase = true;
    $scope.length_password_txt = 25;

    $scope.SYMBOLS = ['!','@','#','$','^','&','(',')','+','-',"_"];
    $scope.NUMBERS = ['0','1','2','3','4','5','6','7','8','9'];
    $scope.LOWERCASE = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    $scope.UPPERCASE = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

    $scope.GeneratePassword = function() {
        whichone = []
        if($scope.check_symbols){
            whichone.push(0)
        }
        if($scope.check_numbers){
            whichone.push(1)
        }
        if($scope.check_lowercase){
            whichone.push(2)
        }
        if($scope.check_uppercase){
            whichone.push(3)
        }
        $scope.random_password_txt = "";
        for (let i = 0; i < $scope.length_password_txt; i++) {
            tag = whichone[Math.floor(Math.random()*whichone.length)]
            switch(tag) {
                case 0:
                    items = $scope.SYMBOLS;
                    break;
                case 1:
                    items = $scope.NUMBERS;
                    break;
                case 2:
                    items = $scope.LOWERCASE;
                    break;
                case 3:
                    items = $scope.UPPERCASE;
                    break;
            }
            $scope.random_password_txt += items[Math.floor(Math.random()*items.length)]
        }
    };

    $scope.CopyPassword = function() {
        navigator.clipboard.writeText($scope.random_password_txt);
    };

    $scope.GeneratePassword()
});