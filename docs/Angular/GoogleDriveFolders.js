var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
    $scope.show_title = true;
    $scope.show_link = true;
    $scope.show_size = true;
    $scope.show_type = true;

    $scope.init = function () {
        var ALL_Cookies = document.cookie.split('; ').reduce((prev, current) => {
            const [name, ...value] = current.split('=');
            prev[name] = value.join('=');
            return prev;
        }, {});;

        $scope.Drive_API_KEY = ALL_Cookies.Cookie_Drive_API_KEY;
    };

    var final = [];

    $scope.GetFilesFromResults = function(up_files){
        console.log(up_files);
        for(let z=0; z<up_files.length; z++){
            files_list = up_files[0][0];
            for(let i=0; i<files_list.length; i++){
                var temp = [];
                temp.push(files_list[i].title);
                temp.push(files_list[i].mimeType);
                temp.push("https://drive.google.com/file/d/" + files_list[i].id + "/view?usp=sharing");
                temp.push((((parseFloat(files_list[i].fileSize))/1024)/1024).toFixed(2) + " MB");
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
        }
    };

    $scope.GETFROMAPI = function(link_api){
        var recieved_data = null;
        var up_files = [];
        $http.get(link_api).then(function(response){
            recieved_data = response.data;
            console.log(recieved_data);
            var result = [];
            var keys = Object.keys(recieved_data);

            result.push(recieved_data['items']);
            console.log(result);
            console.log(keys);

            up_files.push(result);
            $scope.GetFilesFromResults(up_files);

            if(recieved_data['nextLink']){
                var new_link = recieved_data['nextLink'] + '&key=' + $scope.Drive_API_KEY;
                $scope.GETFROMAPI(new_link);
            }
            else{
                console.log("False");
            }
        
        });
    }

    $scope.get_dta_fun = function() {
        final = [];
        $scope.show_files = true;
        document.cookie = "Cookie_Drive_API_KEY="+$scope.Drive_API_KEY+"; expires=Thu, 18 Dec 2100 12:00:00 UTC; path=/";
        first_link = 'https://www.googleapis.com/drive/v2/files?q=%27' + $scope.Folder_ID + '%27+in+parents&key=' + $scope.Drive_API_KEY;
        console.log(first_link);
        $scope.GETFROMAPI(first_link);
    };
});