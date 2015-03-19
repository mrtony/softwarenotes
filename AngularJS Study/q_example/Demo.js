/**
 * Created by tony on 2015/3/17.
 */
(function() {

    angular.module('app')
        .controller('Demo', Demo);

    Demo.$inject = ['$q', '$timeout'];
        
    function Demo($q, $timeout) {
        var vm = this;

        vm.message = {data:"I'm Demo"};
        vm.getMoney = "N/A";  
        
        activate();

        /////////////
        function activate() {
            console.log("test");
            getCash(100);
        /*
            dataservice.getStockList()
                .success(function(data) {
                    console.log("test");
                });
                */
        }
        
        function bankCashCheck(cash){ // 銀行對領錢客戶的處理流程  
            var cashCheckJob = $q.defer();  // 行員向系統 $q 註冊請款 job  
            var promiseCard = cashCheckJob.promise; // 請款 job 回給行員一個智慧保證卡  
              
           $timeout(function(){        // (Thread 2) 銀行進行的工作，這個動作是另一個 thread 處理了  
                alert("Yes! We got it!");  // (Thread 2) 銀行盤點完  
                cashCheckJob.resolve(cash);  // (Thread 2) 通知智慧保證卡並給予款項  
            }, 1*1000);  
            return promiseCard;  // 行員將智慧保證卡給你  
        };
        
        function getCash(cash) {  // 你去銀行領錢  
            var promiseCard = bankCashCheck(cash); // 從行員手上拿到智慧保證卡  
            promiseCard.then(function(cashFromBank){ // 智慧保證卡兌現後得到 getCash 這麼多錢之後要做的事  
                vm.getMoney = cashFromBank;  
            });  
      
            /** 通常在開發時，不會特別設一個參數而是直接寫成一行  
            bankCashCheck(100).then(function(getCash){ 
                $scope.getMoney = getCash; 
            }); 
           **/  
        };  
        

    };
})();
