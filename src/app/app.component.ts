import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { UsersListComponent } from './users-list/users-list.component';
import users from "../../public/users.json"

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SearchComponent,UsersListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'user_search';

  email:string='';

  filteredUsersList:User[] = [];


onSearchResult(email: string) {
  this.filteredUsersList=[]
   for (let index = 0; index < this.userList.length; index++) {
    if (this.userList[index].email.toLocaleLowerCase().includes(email.toLocaleLowerCase())) {
      console.log(this.userList[index].email);
      this.filteredUsersList.push(this.userList[index]);
    }


   }
  }

  constructor(){
    this.filteredUsersList=this.userList
  }

  userList : User[] =users.users;
  // [
  //   {
  //     "id":1,
  //     "firstName":"Emily",
  //     "lastName":"Johnson",
  //     "maidenName":"Smith",
  //     "age":28,
  //     "gender":"female",
  //     "email":"emily.johnson@x.dummyjson.com",
  //     "phone":"+81 965-431-3024",
  //     "username":"emilys",
  //     "password":"emilyspass",
  //     "birthDate":"1996-5-30",
  //     "image":"https://dummyjson.com/icon/emilys/128",
  //     "bloodGroup":"O-",
  //     "height":193.24,
  //     "weight":63.16,
  //     "eyeColor":"Green",
  //     "hair":{
  //        "color":"Brown",
  //        "type":"Curly"
  //     },
  //     "ip":"42.48.100.32",
  //     "address":{
  //        "address":"626 Main Street",
  //        "city":"Phoenix",
  //        "state":"Mississippi",
  //        "stateCode":"MS",
  //        "postalCode":"29112",
  //        "coordinates":{
  //           "lat":-77.16213,
  //           "lng":-92.084824
  //        },
  //        "country":"United States"
  //     },
  //     "macAddress":"47:fa:41:18:ec:eb",
  //     "university":"University of Wisconsin--Madison",
  //     "bank":{
  //        "cardExpire":"03/26",
  //        "cardNumber":"9289760655481815",
  //        "cardType":"Elo",
  //        "currency":"CNY",
  //        "iban":"YPUXISOBI7TTHPK2BR3HAIXL"
  //     },
  //     "company":{
  //        "department":"Engineering",
  //        "name":"Dooley, Kozey and Cronin",
  //        "title":"Sales Manager",
  //        "address":{
  //           "address":"263 Tenth Street",
  //           "city":"San Francisco",
  //           "state":"Wisconsin",
  //           "stateCode":"WI",
  //           "postalCode":"37657",
  //           "coordinates":{
  //              "lat":71.814525,
  //              "lng":-161.150263
  //           },
  //           "country":"United States"
  //        }
  //     },
  //     "ein":"977-175",
  //     "ssn":"900-590-289",
  //     "userAgent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36",
  //     "crypto":{
  //        "coin":"Bitcoin",
  //        "wallet":"0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",
  //        "network":"Ethereum (ERC20)"
  //     },
  //     "role":"admin"
  //  },
  //  {
  //     "id":2,
  //     "firstName":"Michael",
  //     "lastName":"Williams",
  //     "maidenName":"",
  //     "age":35,
  //     "gender":"male",
  //     "email":"michael.williams@x.dummyjson.com",
  //     "phone":"+49 258-627-6644",
  //     "username":"michaelw",
  //     "password":"michaelwpass",
  //     "birthDate":"1989-8-10",
  //     "image":"https://dummyjson.com/icon/michaelw/128",
  //     "bloodGroup":"B+",
  //     "height":186.22,
  //     "weight":76.32,
  //     "eyeColor":"Red",
  //     "hair":{
  //        "color":"Green",
  //        "type":"Straight"
  //     },
  //     "ip":"12.13.116.142",
  //     "address":{
  //        "address":"385 Fifth Street",
  //        "city":"Houston",
  //        "state":"Alabama",
  //        "stateCode":"AL",
  //        "postalCode":"38807",
  //        "coordinates":{
  //           "lat":22.815468,
  //           "lng":115.608581
  //        },
  //        "country":"United States"
  //     },
  //     "macAddress":"79:15:78:99:60:aa",
  //     "university":"Ohio State University",
  //     "bank":{
  //        "cardExpire":"02/27",
  //        "cardNumber":"6737807858721625",
  //        "cardType":"Elo",
  //        "currency":"SEK",
  //        "iban":"83IDT77FWYLCJVR8ISDACFH0"
  //     },
  //     "company":{
  //        "department":"Support",
  //        "name":"Spinka - Dickinson",
  //        "title":"Support Specialist",
  //        "address":{
  //           "address":"395 Main Street",
  //           "city":"Los Angeles",
  //           "state":"New Hampshire",
  //           "stateCode":"NH",
  //           "postalCode":"73442",
  //           "coordinates":{
  //              "lat":79.098326,
  //              "lng":-119.624845
  //           },
  //           "country":"United States"
  //        }
  //     },
  //     "ein":"912-602",
  //     "ssn":"108-953-962",
  //     "userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Edge/97.0.1072.76 Safari/537.36",
  //     "crypto":{
  //        "coin":"Bitcoin",
  //        "wallet":"0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",
  //        "network":"Ethereum (ERC20)"
  //     },
  //     "role":"admin"
  //  },
  //  {
  //     "id":3,
  //     "firstName":"Sophia",
  //     "lastName":"Brown",
  //     "maidenName":"",
  //     "age":42,
  //     "gender":"female",
  //     "email":"sophia.brown@x.dummyjson.com",
  //     "phone":"+81 210-652-2785",
  //     "username":"sophiab",
  //     "password":"sophiabpass",
  //     "birthDate":"1982-11-6",
  //     "image":"https://dummyjson.com/icon/sophiab/128",
  //     "bloodGroup":"O-",
  //     "height":177.72,
  //     "weight":52.6,
  //     "eyeColor":"Hazel",
  //     "hair":{
  //        "color":"White",
  //        "type":"Wavy"
  //     },
  //     "ip":"214.225.51.195",
  //     "address":{
  //        "address":"1642 Ninth Street",
  //        "city":"Washington",
  //        "state":"Alabama",
  //        "stateCode":"AL",
  //        "postalCode":"32822",
  //        "coordinates":{
  //           "lat":45.289366,
  //           "lng":46.832664
  //        },
  //        "country":"United States"
  //     },
  //     "macAddress":"12:a3:d3:6f:5c:5b",
  //     "university":"Pepperdine University",
  //     "bank":{
  //        "cardExpire":"04/25",
  //        "cardNumber":"7795895470082859",
  //        "cardType":"Korean Express",
  //        "currency":"SEK",
  //        "iban":"90XYKT83LMM7AARZ8JN958JC"
  //     },
  //     "company":{
  //        "department":"Research and Development",
  //        "name":"Schiller - Zieme",
  //        "title":"Accountant",
  //        "address":{
  //           "address":"1896 Washington Street",
  //           "city":"Dallas",
  //           "state":"Nevada",
  //           "stateCode":"NV",
  //           "postalCode":"88511",
  //           "coordinates":{
  //              "lat":20.086743,
  //              "lng":-34.577107
  //           },
  //           "country":"United States"
  //        }
  //     },
  //     "ein":"963-113",
  //     "ssn":"638-461-822",
  //     "userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36",
  //     "crypto":{
  //        "coin":"Bitcoin",
  //        "wallet":"0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",
  //        "network":"Ethereum (ERC20)"
  //     },
  //     "role":"admin"
  //  },
  //  {
  //     "id":4,
  //     "firstName":"James",
  //     "lastName":"Davis",
  //     "maidenName":"",
  //     "age":45,
  //     "gender":"male",
  //     "email":"james.davis@x.dummyjson.com",
  //     "phone":"+49 614-958-9364",
  //     "username":"jamesd",
  //     "password":"jamesdpass",
  //     "birthDate":"1979-5-4",
  //     "image":"https://dummyjson.com/icon/jamesd/128",
  //     "bloodGroup":"AB+",
  //     "height":193.31,
  //     "weight":62.1,
  //     "eyeColor":"Amber",
  //     "hair":{
  //        "color":"Blonde",
  //        "type":"Straight"
  //     },
  //     "ip":"101.118.131.66",
  //     "address":{
  //        "address":"238 Jefferson Street",
  //        "city":"Seattle",
  //        "state":"Pennsylvania",
  //        "stateCode":"PA",
  //        "postalCode":"68354",
  //        "coordinates":{
  //           "lat":16.782513,
  //           "lng":-139.34723
  //        },
  //        "country":"United States"
  //     },
  //     "macAddress":"10:7d:df:1f:97:58",
  //     "university":"University of Southern California",
  //     "bank":{
  //        "cardExpire":"05/29",
  //        "cardNumber":"5005519846254763",
  //        "cardType":"Mastercard",
  //        "currency":"INR",
  //        "iban":"7N7ZH1PJ8Q4WU1K965HQQR27"
  //     },
  //     "company":{
  //        "department":"Support",
  //        "name":"Pagac and Sons",
  //        "title":"Research Analyst",
  //        "address":{
  //           "address":"1622 Lincoln Street",
  //           "city":"Fort Worth",
  //           "state":"Pennsylvania",
  //           "stateCode":"PA",
  //           "postalCode":"27768",
  //           "coordinates":{
  //              "lat":54.91193,
  //              "lng":-79.498328
  //           },
  //           "country":"United States"
  //        }
  //     },
  //     "ein":"904-810",
  //     "ssn":"116-951-314",
  //     "userAgent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36",
  //     "crypto":{
  //        "coin":"Bitcoin",
  //        "wallet":"0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",
  //        "network":"Ethereum (ERC20)"
  //     },
  //     "role":"admin"
  //  },
  //  {
  //     "id":5,
  //     "firstName":"Emma",
  //     "lastName":"Miller",
  //     "maidenName":"Johnson",
  //     "age":30,
  //     "gender":"female",
  //     "email":"emma.miller@x.dummyjson.com",
  //     "phone":"+91 759-776-1614",
  //     "username":"emmaj",
  //     "password":"emmajpass",
  //     "birthDate":"1994-6-13",
  //     "image":"https://dummyjson.com/icon/emmaj/128",
  //     "bloodGroup":"AB-",
  //     "height":192.8,
  //     "weight":63.62,
  //     "eyeColor":"Green",
  //     "hair":{
  //        "color":"White",
  //        "type":"Straight"
  //     },
  //     "ip":"224.126.22.183",
  //     "address":{
  //        "address":"607 Fourth Street",
  //        "city":"Jacksonville",
  //        "state":"Colorado",
  //        "stateCode":"CO",
  //        "postalCode":"26593",
  //        "coordinates":{
  //           "lat":0.505589,
  //           "lng":-157.43281
  //        },
  //        "country":"United States"
  //     },
  //     "macAddress":"32:b9:7e:8d:f5:e8",
  //     "university":"Northeastern University",
  //     "bank":{
  //        "cardExpire":"03/26",
  //        "cardNumber":"5772950119588627",
  //        "cardType":"American Express",
  //        "currency":"CAD",
  //        "iban":"TAVHURD845KVBTB8W81AQXRY"
  //     },
  //     "company":{
  //        "department":"Human Resources",
  //        "name":"Graham - Gulgowski",
  //        "title":"Quality Assurance Engineer",
  //        "address":{
  //           "address":"1460 Sixth Street",
  //           "city":"San Antonio",
  //           "state":"Idaho",
  //           "stateCode":"ID",
  //           "postalCode":"21965",
  //           "coordinates":{
  //              "lat":44.346545,
  //              "lng":-26.944701
  //           },
  //           "country":"United States"
  //        }
  //     },
  //     "ein":"403-505",
  //     "ssn":"526-210-885",
  //     "userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:97.0) Gecko/20100101 Firefox/97.0",
  //     "crypto":{
  //        "coin":"Bitcoin",
  //        "wallet":"0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",
  //        "network":"Ethereum (ERC20)"
  //     },
  //     "role":"admin"
  //  },
  //  {
  //     "id":6,
  //     "firstName":"Olivia",
  //     "lastName":"Wilson",
  //     "maidenName":"",
  //     "age":22,
  //     "gender":"female",
  //     "email":"olivia.wilson@x.dummyjson.com",
  //     "phone":"+91 607-295-6448",
  //     "username":"oliviaw",
  //     "password":"oliviawpass",
  //     "birthDate":"2002-4-20",
  //     "image":"https://dummyjson.com/icon/oliviaw/128",
  //     "bloodGroup":"B+",
  //     "height":182.61,
  //     "weight":58,
  //     "eyeColor":"Hazel",
  //     "hair":{
  //        "color":"Gray",
  //        "type":"Curly"
  //     },
  //     "ip":"249.178.112.207",
  //     "address":{
  //        "address":"547 First Street",
  //        "city":"Fort Worth",
  //        "state":"Tennessee",
  //        "stateCode":"TN",
  //        "postalCode":"83843",
  //        "coordinates":{
  //           "lat":75.32627,
  //           "lng":-26.15285
  //        },
  //        "country":"United States"
  //     },
  //     "macAddress":"9c:7f:ea:34:18:19",
  //     "university":"University of North Carolina--Chapel Hill",
  //     "bank":{
  //        "cardExpire":"05/28",
  //        "cardNumber":"6771923832947881",
  //        "cardType":"Diners Club International",
  //        "currency":"BRL",
  //        "iban":"V6H0O5OE3Q4JVKWDTYWZABMD"
  //     },
  //     "company":{
  //        "department":"Product Management",
  //        "name":"Pfannerstill Inc",
  //        "title":"Research Analyst",
  //        "address":{
  //           "address":"425 Sixth Street",
  //           "city":"Indianapolis",
  //           "state":"Oklahoma",
  //           "stateCode":"OK",
  //           "postalCode":"74263",
  //           "coordinates":{
  //              "lat":74.986644,
  //              "lng":-132.916888
  //           },
  //           "country":"United States"
  //        }
  //     },
  //     "ein":"921-709",
  //     "ssn":"836-772-168",
  //     "userAgent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.3 Safari/605.1.15",
  //     "crypto":{
  //        "coin":"Bitcoin",
  //        "wallet":"0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",
  //        "network":"Ethereum (ERC20)"
  //     },
  //     "role":"moderator"
  //  },
  //  {
  //     "id":7,
  //     "firstName":"Alexander",
  //     "lastName":"Jones",
  //     "maidenName":"",
  //     "age":38,
  //     "gender":"male",
  //     "email":"alexander.jones@x.dummyjson.com",
  //     "phone":"+61 260-824-4986",
  //     "username":"alexanderj",
  //     "password":"alexanderjpass",
  //     "birthDate":"1986-10-20",
  //     "image":"https://dummyjson.com/icon/alexanderj/128",
  //     "bloodGroup":"AB-",
  //     "height":153.89,
  //     "weight":77.42,
  //     "eyeColor":"Blue",
  //     "hair":{
  //        "color":"White",
  //        "type":"Straight"
  //     },
  //     "ip":"166.204.84.32",
  //     "address":{
  //        "address":"664 Maple Street",
  //        "city":"Indianapolis",
  //        "state":"Delaware",
  //        "stateCode":"DE",
  //        "postalCode":"86684",
  //        "coordinates":{
  //           "lat":35.289664,
  //           "lng":7.063255
  //        },
  //        "country":"United States"
  //     },
  //     "macAddress":"d2:64:58:2d:1c:46",
  //     "university":"University of Illinois--Urbana-Champaign",
  //     "bank":{
  //        "cardExpire":"05/25",
  //        "cardNumber":"7344951706130140",
  //        "cardType":"JCB",
  //        "currency":"EUR",
  //        "iban":"49V4GVDVMP0MHIDD4VXMQ3A2"
  //     },
  //     "company":{
  //        "department":"Engineering",
  //        "name":"Dickens - Beahan",
  //        "title":"Web Developer",
  //        "address":{
  //           "address":"996 Eighth Street",
  //           "city":"Washington",
  //           "state":"Kansas",
  //           "stateCode":"KS",
  //           "postalCode":"27858",
  //           "coordinates":{
  //              "lat":-75.462366,
  //              "lng":-128.025697
  //           },
  //           "country":"United States"
  //        }
  //     },
  //     "ein":"638-127",
  //     "ssn":"722-993-925",
  //     "userAgent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36",
  //     "crypto":{
  //        "coin":"Bitcoin",
  //        "wallet":"0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",
  //        "network":"Ethereum (ERC20)"
  //     },
  //     "role":"moderator"
  //  },
  //  {
  //     "id":8,
  //     "firstName":"Ava",
  //     "lastName":"Taylor",
  //     "maidenName":"",
  //     "age":27,
  //     "gender":"female",
  //     "email":"ava.taylor@x.dummyjson.com",
  //     "phone":"+1 458-853-7877",
  //     "username":"avat",
  //     "password":"avatpass",
  //     "birthDate":"1997-8-25",
  //     "image":"https://dummyjson.com/icon/avat/128",
  //     "bloodGroup":"AB-",
  //     "height":168.47,
  //     "weight":57.08,
  //     "eyeColor":"Hazel",
  //     "hair":{
  //        "color":"Red",
  //        "type":"Kinky"
  //     },
  //     "ip":"150.73.197.233",
  //     "address":{
  //        "address":"1197 First Street",
  //        "city":"Fort Worth",
  //        "state":"Rhode Island",
  //        "stateCode":"RI",
  //        "postalCode":"24771",
  //        "coordinates":{
  //           "lat":-81.194833,
  //           "lng":-87.948158
  //        },
  //        "country":"United States"
  //     },
  //     "macAddress":"8d:2e:c2:d6:e7:a8",
  //     "university":"University of Wisconsin--Madison",
  //     "bank":{
  //        "cardExpire":"01/29",
  //        "cardNumber":"6412128967460199",
  //        "cardType":"Maestro",
  //        "currency":"CNY",
  //        "iban":"TS66YQ8R16OX7IJKLUONDQHP"
  //     },
  //     "company":{
  //        "department":"Marketing",
  //        "name":"Nikolaus Inc",
  //        "title":"Chief Executive Officer",
  //        "address":{
  //           "address":"930 Lincoln Street",
  //           "city":"Austin",
  //           "state":"Colorado",
  //           "stateCode":"CO",
  //           "postalCode":"47592",
  //           "coordinates":{
  //              "lat":87.970083,
  //              "lng":-42.769351
  //           },
  //           "country":"United States"
  //        }
  //     },
  //     "ein":"297-762",
  //     "ssn":"257-419-109",
  //     "userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36",
  //     "crypto":{
  //        "coin":"Bitcoin",
  //        "wallet":"0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",
  //        "network":"Ethereum (ERC20)"
  //     },
  //     "role":"moderator"
  //  },
  //  {
  //     "id":9,
  //     "firstName":"Ethan",
  //     "lastName":"Martinez",
  //     "maidenName":"",
  //     "age":33,
  //     "gender":"male",
  //     "email":"ethan.martinez@x.dummyjson.com",
  //     "phone":"+92 933-608-5081",
  //     "username":"ethanm",
  //     "password":"ethanmpass",
  //     "birthDate":"1991-2-12",
  //     "image":"https://dummyjson.com/icon/ethanm/128",
  //     "bloodGroup":"AB+",
  //     "height":159.19,
  //     "weight":68.81,
  //     "eyeColor":"Hazel",
  //     "hair":{
  //        "color":"Purple",
  //        "type":"Curly"
  //     },
  //     "ip":"63.191.127.71",
  //     "address":{
  //        "address":"466 Pine Street",
  //        "city":"San Antonio",
  //        "state":"Louisiana",
  //        "stateCode":"LA",
  //        "postalCode":"72360",
  //        "coordinates":{
  //           "lat":74.074918,
  //           "lng":-25.312703
  //        },
  //        "country":"United States"
  //     },
  //     "macAddress":"59:e:9e:e3:29:da",
  //     "university":"Syracuse University",
  //     "bank":{
  //        "cardExpire":"02/25",
  //        "cardNumber":"7183482484317509",
  //        "cardType":"Visa",
  //        "currency":"CAD",
  //        "iban":"CW5U5KS23U7JYD22TVQL7SIH"
  //     },
  //     "company":{
  //        "department":"Support",
  //        "name":"Gorczany - Gottlieb",
  //        "title":"Legal Counsel",
  //        "address":{
  //           "address":"1597 Oak Street",
  //           "city":"Chicago",
  //           "state":"Florida",
  //           "stateCode":"FL",
  //           "postalCode":"28100",
  //           "coordinates":{
  //              "lat":-67.45208,
  //              "lng":-23.209886
  //           },
  //           "country":"United States"
  //        }
  //     },
  //     "ein":"790-434",
  //     "ssn":"569-650-348",
  //     "userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36",
  //     "crypto":{
  //        "coin":"Bitcoin",
  //        "wallet":"0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",
  //        "network":"Ethereum (ERC20)"
  //     },
  //     "role":"moderator"
  //  },
  //  {
  //     "id":10,
  //     "firstName":"Isabella",
  //     "lastName":"Anderson",
  //     "maidenName":"Davis",
  //     "age":31,
  //     "gender":"female",
  //     "email":"isabella.anderson@x.dummyjson.com",
  //     "phone":"+49 770-658-4885",
  //     "username":"isabellad",
  //     "password":"isabelladpass",
  //     "birthDate":"1993-6-10",
  //     "image":"https://dummyjson.com/icon/isabellad/128",
  //     "bloodGroup":"A-",
  //     "height":150.56,
  //     "weight":50.1,
  //     "eyeColor":"Brown",
  //     "hair":{
  //        "color":"Blonde",
  //        "type":"Curly"
  //     },
  //     "ip":"114.9.114.205",
  //     "address":{
  //        "address":"1964 Oak Street",
  //        "city":"New York",
  //        "state":"Utah",
  //        "stateCode":"UT",
  //        "postalCode":"89352",
  //        "coordinates":{
  //           "lat":41.331324,
  //           "lng":151.782727
  //        },
  //        "country":"United States"
  //     },
  //     "macAddress":"b1:b0:d0:a2:82:80",
  //     "university":"California Institute of Technology (Caltech)",
  //     "bank":{
  //        "cardExpire":"05/27",
  //        "cardNumber":"6118714010128731",
  //        "cardType":"NPS",
  //        "currency":"CNY",
  //        "iban":"GBZRGDMKUOTO34HBCI7A986J"
  //     },
  //     "company":{
  //        "department":"Marketing",
  //        "name":"Pollich - Hilpert",
  //        "title":"Chief Financial Officer",
  //        "address":{
  //           "address":"1029 Adams Street",
  //           "city":"San Diego",
  //           "state":"Maryland",
  //           "stateCode":"MD",
  //           "postalCode":"63847",
  //           "coordinates":{
  //              "lat":-25.843393,
  //              "lng":-62.692681
  //           },
  //           "country":"United States"
  //        }
  //     },
  //     "ein":"127-297",
  //     "ssn":"902-438-728",
  //     "userAgent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36",
  //     "crypto":{
  //        "coin":"Bitcoin",
  //        "wallet":"0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",
  //        "network":"Ethereum (ERC20)"
  //     },
  //     "role":"moderator"
  //  },
  //  {
  //     "id":11,
  //     "firstName":"Liam",
  //     "lastName":"Garcia",
  //     "maidenName":"",
  //     "age":29,
  //     "gender":"male",
  //     "email":"liam.garcia@x.dummyjson.com",
  //     "phone":"+92 870-217-6201",
  //     "username":"liamg",
  //     "password":"liamgpass",
  //     "birthDate":"1995-6-6",
  //     "image":"https://dummyjson.com/icon/liamg/128",
  //     "bloodGroup":"AB-",
  //     "height":162.32,
  //     "weight":93.16,
  //     "eyeColor":"Violet",
  //     "hair":{
  //        "color":"Red",
  //        "type":"Wavy"
  //     },
  //     "ip":"56.201.85.9",
  //     "address":{
  //        "address":"576 Fifth Street",
  //        "city":"Denver",
  //        "state":"South Dakota",
  //        "stateCode":"SD",
  //        "postalCode":"57252",
  //        "coordinates":{
  //           "lat":-66.218177,
  //           "lng":-145.340165
  //        },
  //        "country":"United States"
  //     },
  //     "macAddress":"31:9a:28:8b:99:6c",
  //     "university":"Ohio State University",
  //     "bank":{
  //        "cardExpire":"02/27",
  //        "cardNumber":"2302893002194899",
  //        "cardType":"Discover",
  //        "currency":"GBP",
  //        "iban":"O8ENPRB9UVBL2EFZ7601KC09"
  //     },
  //     "company":{
  //        "department":"Services",
  //        "name":"Considine - Torp",
  //        "title":"Web Developer",
  //        "address":{
  //           "address":"27 Cedar Street",
  //           "city":"Philadelphia",
  //           "state":"Connecticut",
  //           "stateCode":"CT",
  //           "postalCode":"79574",
  //           "coordinates":{
  //              "lat":-81.841588,
  //              "lng":31.79423
  //           },
  //           "country":"United States"
  //        }
  //     },
  //     "ein":"326-604",
  //     "ssn":"933-784-949",
  //     "userAgent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36",
  //     "crypto":{
  //        "coin":"Bitcoin",
  //        "wallet":"0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",
  //        "network":"Ethereum (ERC20)"
  //     },
  //     "role":"moderator"
  //  },
  //  {
  //     "id":12,
  //     "firstName":"Mia",
  //     "lastName":"Rodriguez",
  //     "maidenName":"",
  //     "age":24,
  //     "gender":"female",
  //     "email":"mia.rodriguez@x.dummyjson.com",
  //     "phone":"+49 989-461-8403",
  //     "username":"miar",
  //     "password":"miarpass",
  //     "birthDate":"2000-8-4",
  //     "image":"https://dummyjson.com/icon/miar/128",
  //     "bloodGroup":"O-",
  //     "height":188.08,
  //     "weight":56.03,
  //     "eyeColor":"Blue",
  //     "hair":{
  //        "color":"Purple",
  //        "type":"Wavy"
  //     },
  //     "ip":"11.72.253.90",
  //     "address":{
  //        "address":"1627 Sixth Street",
  //        "city":"Jacksonville",
  //        "state":"West Virginia",
  //        "stateCode":"WV",
  //        "postalCode":"41810",
  //        "coordinates":{
  //           "lat":24.857497,
  //           "lng":-34.865429
  //        },
  //        "country":"United States"
  //     },
  //     "macAddress":"53:d7:a4:6:1e:58",
  //     "university":"William & Mary",
  //     "bank":{
  //        "cardExpire":"05/26",
  //        "cardNumber":"1539872303456158",
  //        "cardType":"Carte Bancaire",
  //        "currency":"CAD",
  //        "iban":"EBMD95RLK8B82ZAZNXBJ09V5"
  //     },
  //     "company":{
  //        "department":"Accounting",
  //        "name":"Miller, Schowalter and Wisozk",
  //        "title":"Business Analyst",
  //        "address":{
  //           "address":"1039 Washington Street",
  //           "city":"Philadelphia",
  //           "state":"New Jersey",
  //           "stateCode":"NJ",
  //           "postalCode":"57518",
  //           "coordinates":{
  //              "lat":85.455933,
  //              "lng":164.246103
  //           },
  //           "country":"United States"
  //        }
  //     },
  //     "ein":"754-660",
  //     "ssn":"749-524-124",
  //     "userAgent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36",
  //     "crypto":{
  //        "coin":"Bitcoin",
  //        "wallet":"0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",
  //        "network":"Ethereum (ERC20)"
  //     },
  //     "role":"moderator"
  //  },
  //  {
  //     "id":13,
  //     "firstName":"Noah",
  //     "lastName":"Hernandez",
  //     "maidenName":"",
  //     "age":40,
  //     "gender":"male",
  //     "email":"noah.hernandez@x.dummyjson.com",
  //     "phone":"+49 393-605-6968",
  //     "username":"noahh",
  //     "password":"noahhpass",
  //     "birthDate":"1984-6-5",
  //     "image":"https://dummyjson.com/icon/noahh/128",
  //     "bloodGroup":"AB+",
  //     "height":188.62,
  //     "weight":69.49,
  //     "eyeColor":"Brown",
  //     "hair":{
  //        "color":"Red",
  //        "type":"Curly"
  //     },
  //     "ip":"169.154.126.57",
  //     "address":{
  //        "address":"1413 Maple Street",
  //        "city":"New York",
  //        "state":"North Dakota",
  //        "stateCode":"ND",
  //        "postalCode":"73696",
  //        "coordinates":{
  //           "lat":-25.0377,
  //           "lng":-151.70469
  //        },
  //        "country":"United States"
  //     },
  //     "macAddress":"d4:fe:ae:8f:eb:a3",
  //     "university":"New York University (NYU)",
  //     "bank":{
  //        "cardExpire":"05/26",
  //        "cardNumber":"1681772579326385",
  //        "cardType":"Discover",
  //        "currency":"SEK",
  //        "iban":"G4UIZKIQVPJM9D31XQVR1E9Z"
  //     },
  //     "company":{
  //        "department":"Engineering",
  //        "name":"Botsford, Marquardt and Roberts",
  //        "title":"Database Administrator",
  //        "address":{
  //           "address":"62 Third Street",
  //           "city":"Seattle",
  //           "state":"Oregon",
  //           "stateCode":"OR",
  //           "postalCode":"83474",
  //           "coordinates":{
  //              "lat":19.490447,
  //              "lng":-13.173207
  //           },
  //           "country":"United States"
  //        }
  //     },
  //     "ein":"877-628",
  //     "ssn":"660-847-389",
  //     "userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36",
  //     "crypto":{
  //        "coin":"Bitcoin",
  //        "wallet":"0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",
  //        "network":"Ethereum (ERC20)"
  //     },
  //     "role":"moderator"
  //  }
  // ]

}

interface User{

  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: {
    color: string;
    type: string;
  };
  ip: string;
  address: {
    address: string;
    city: string;
    state: string;
    stateCode: string;
    postalCode: string;
    coordinates: {
      lat: number;
      lng: number;
    };
    country: string;
  };
  macAddress: string;
  university: string;
  bank: {
    cardExpire: string;
    cardNumber: string;
    cardType: string;
    currency: string;
    iban: string;
  };
  company: {
    department: string;
    name: string;
    title: string;
    address: {
      address: string;
      city: string;
      state: string;
      stateCode: string;
      postalCode: string;
      coordinates: {
        lat: number;
        lng: number;
      };
      country: string;
    };
  };
  ein: string;
  ssn: string;
  userAgent: string;
  crypto: {
    coin: string;
    wallet: string;
    network: string;
  };
  role: string;
}