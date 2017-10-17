angular.module('RegisterCtrl', []).controller('RegisterController', ['$scope','$filter', function($scope,$filter) {

    $scope.jsondata=[];
    $scope.showreg=function (){

	$scope.formregmodel=true;
	$scope.formloginmodel=false;
	$scope.Nodata=false;
	$scope.succesreg=false;
	// body.....
}

$scope.logout=function (){

	$scope.formregmodel=false;
	$scope.formloginmodel=false;
	$scope.Nodata=false;
	$scope.Divelm=false;
	$scope.creditionls=false;
	$scope.succesreg=false;

	// body...
}
        $scope.reg=function ()
        {
            $scope.succesreg=false;
        if($scope.rpassword!=$scope.repassword ){
            return $scope.pwerror=true;	
            }
            var dubUsername=$filter('filter')($scope.jsondata,{UserName:$scope.runame});
            if(dubUsername.length==0)
            {
        if((($scope.runame != "")&&($scope.runame != null))&&(($scope.myEmail != "")&&($scope.myEmail != null))&&(($scope.rpassword != "")&&($scope.rpassword!= null))&&(($scope.Qualification != "")&&($scope.Qualification!= null)))
        {
            $scope.jsondata.push({"UserName":$scope.runame,"Email":$scope.myEmail,"password":$scope.rpassword,"Qualification":$scope.Qualification});
            $scope.succesreg=true;
        }
        else
        {
            alert("Enter the fields");
        }
        $scope.formregmodel=false;
        $scope.runame="";$scope.myEmail="";$scope.rpassword ="";$scope.repassword ="";$scope.Qualification="";
        
        }
        };
        }]).directive("successreg", function() {
            return {
                template : "<h1>Your are Successfully Registered  .........</h1>"
            };
        

});