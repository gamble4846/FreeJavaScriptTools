var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
    $scope.show_title = true;
    $scope.show_link = true;
    $scope.show_size = true;

    $scope.init = function () {
        var ALL_Cookies = document.cookie.split('; ').reduce((prev, current) => {
            const [name, ...value] = current.split('=');
            prev[name] = value.join('=');
            return prev;
        }, {});;

        $scope.Drive_API_KEY = ALL_Cookies.Cookie_Drive_API_KEY;
    };

    $scope.get_dta_fun = function() {
        $scope.show_files = true;
        recieved_data = null;
        parsed_recieved_data = null;
        document.cookie = "Cookie_Drive_API_KEY="+$scope.Drive_API_KEY+"; expires=Thu, 18 Dec 2100 12:00:00 UTC; path=/";
        $http.get('https://www.googleapis.com/drive/v2/files?q=%27' + $scope.Folder_ID + '%27+in+parents&key=' + $scope.Drive_API_KEY).then(function(response){
            recieved_data = response.data;
            var result = [];
            var keys = Object.keys(recieved_data);
            keys.forEach(function(key){
                result.push(recieved_data[key]);
            });

            var final = [];
            for(let i=0; i<result[4].length; i++){
                var temp = [];
                temp.push(result[4][i].title);
                temp.push("https://drive.google.com/file/d/" + result[4][i].id + "/view?usp=sharing");
                temp.push((((parseFloat(result[4][i].fileSize))/1024)/1024).toFixed(2) + " MB");
                final.push(temp);
            }
            
            console.log(final[0][0]);

            var x = [];
            for(let i=0; i<final.length; i++){
                for(let j=0; j<final.length; j++){
                    if(final[i][0] < final[j][0]){
                        x = final[i];
                        final[i] = final[j];
                        final[j] = x;
                    }
                }
            }

            $scope.JSON_DATA = final;
            console.log(final);
        });
    };
});