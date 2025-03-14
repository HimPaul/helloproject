public with sharing class wireDemoMethod {
    @AuraEnabled(cacheable = 'true')
    public static List<Account> getAccountDetails(){
      return [SELECT Name,Id FROM Account LIMIT 10];
    }
}0    