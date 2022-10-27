var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.number_of_words = 0;
    $scope.number_of_characters = 0;

    $scope.word_1 = "-";
    $scope.word_2 = "-";
    $scope.word_3 = "-";
    $scope.word_4 = "-";
    $scope.word_5 = "-";

    $scope.count_1 = "-";
    $scope.count_2 = "-";
    $scope.count_3 = "-";
    $scope.count_4 = "-";
    $scope.count_5 = "-";

    $scope.main_function = function() {
        var matches = String($scope.input_text).match(/[\w\d\’\'-]+/gi);
        $scope.number_of_words = matches ? matches.length : 0;
        $scope.number_of_characters = String($scope.input_text).length;

        var words = String($scope.input_text).split(" ");
        let words_unique = words.filter((item, i, ar) => ar.indexOf(item) === i);
        let words_unique_count = [];

        for(let i = 0; i<words_unique.length ; i++){
            let count = 0;
            for(let j=0; j<words.length; j++){
                if(words[j] == words_unique[i]){
                    count++;
                }
            }
            words_unique_count[i]=count;
        }

        for(let i = 0; i<words_unique.length ; i++){
            for(let j = i+1; j<words_unique.length; j++){
                let temp = "";
                let temp2 = 0;
                if(words_unique_count[i]<words_unique_count[j]){
                    temp = words_unique[i];
                    words_unique[i] = words_unique[j];
                    words_unique[j] = temp;

                    temp2 = words_unique_count[i];
                    words_unique_count[i] = words_unique_count[j];
                    words_unique_count[j] = temp2;
                }
            }
        }

        $scope.word_1 = words_unique[0] != null ? words_unique[0] : "-";
        $scope.word_2 = words_unique[1] != null ? words_unique[1] : "-";
        $scope.word_3 = words_unique[2] != null ? words_unique[2] : "-";
        $scope.word_4 = words_unique[3] != null ? words_unique[3] : "-";
        $scope.word_5 = words_unique[4] != null ? words_unique[4] : "-";

        $scope.count_1 = words_unique_count[0] != null ? words_unique_count[0] : "-";
        $scope.count_2 = words_unique_count[1] != null ? words_unique_count[1] : "-";
        $scope.count_3 = words_unique_count[2] != null ? words_unique_count[2] : "-";
        $scope.count_4 = words_unique_count[3] != null ? words_unique_count[3] : "-";
        $scope.count_5 = words_unique_count[4] != null ? words_unique_count[4] : "-";
    };
});