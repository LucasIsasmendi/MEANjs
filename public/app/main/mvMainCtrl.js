angular.module('app').controller('mvMainCtrl', function($scope) {
	$scope.courses =  [
    {name: 'BI for Managers', featured: true, published: new Date('10/5/2013')},
    {name: 'BI for CEOs', featured: true, published: new Date('10/12/2013')},
    {name: 'Learning about Metrics', featured: false, published: new Date('10/1/2013')},
    {name: 'The Systemic view of BI', featured: false, published: new Date('7/12/2013')},
    {name: 'Personal Dashboard Process', featured: true, published: new Date('1/1/2013')},
    {name: 'Advantages of Social Analytics', featured: true, published: new Date('10/13/2013')},
    {name: '20 Key Metrics for my business', featured: true, published: new Date('3/1/2013')},
    {name: 'A Survival Guide to non BI minds', featured: true, published: new Date('2/1/2013')},
    {name: 'How to Job Hunt Without Alerting your Boss', featured: true, published: new Date('10/7/2013')},
    {name: 'How to Keep your Soul and go into BI Management', featured: false, published: new Date('8/1/2013')},
    {name: 'Helping Management to use Your Dadshboards', featured: false, published: new Date('11/1/2013')},
    {name: 'BI for Fun and Profit', featured: true, published: new Date('7/1/2013')}
  ]

})