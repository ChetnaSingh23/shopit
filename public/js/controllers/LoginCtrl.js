angular.module('LoginCtrl', []).controller('LoginController', ['$scope','$filter', function($scope,$filter) {	
$scope.jsondata=[];
$scope.showlogin=function()
{
	if(($scope.jsondata!= "")&&($scope.jsondata!= null))
	{
$scope.formloginmodel=true;
$scope.formregmodel=false;
$scope.Nodata=false;
$scope.succesreg=false;
	}
else
{
$scope.Nodata=true;
$scope.formregmodel=false;
}
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
var lUsername=[];
$scope.lll=[];
$scope.login=function () {
	
	lUsername=$filter('filter')($scope.jsondata,{UserName:$scope.uname,password:$scope.password});
	$scope.creditionls=false;$scope.succesreg=false;
	if(lUsername.length!=0&&lUsername[0].UserName==$scope.uname&&lUsername[0].password==$scope.password)
	{

		$scope.Divelm=true;
		$scope.creditionls=false;
		$scope.formloginmodel=false;
		$scope.succesreg=false;
		$scope.lll=lUsername;

	}

	else
	{
		$scope.creditionls=true;
	}
	$scope.uname="";$scope.password="";
};

}]);
	