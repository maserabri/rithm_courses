//Use the following object for this set of questions:

let users = [
  {
    username: 'larry',
    email: 'larry@foo.com',
    yearsExperience: 22.1,
    favoriteLanguages: ['Perl', 'Java', 'C++'],
    favoriteEditor: 'Vim',
    hobbies: ['Fishing', 'Sailing', 'Hiking'],
    hometown: {
      city: 'San Francisco',
      state: 'CA'
    }
  },
  {
    username: 'jane',
    email: 'jane@test.com',
    yearsExperience: 33.9,
    favoriteLanguages: ['Haskell', 'Clojure', 'PHP'],
    favoriteEditor: 'Emacs',
    hobbies: ['Swimming', 'Biking', 'Hiking'],
    hometown: {
      city: 'New York',
      state: 'NY'
    }
  },
  {
    username: 'sam',
    email: 'sam@test.com',
    yearsExperience: 8.2,
    favoriteLanguages: ['JavaScript', 'Ruby', 'Python', 'Go'],
    favoriteEditor: 'Atom',
    hobbies: ['Golf', 'Cooking', 'Archery'],
    hometown: {
      city: 'Fargo',
      state: 'SD'
    }
  },
  {
    username: 'anne',
    email: 'anne@test.com',
    yearsExperience: 4,
    favoriteLanguages: ['C#', 'C++', 'F#'],
    favoriteEditor: 'Visual Studio Code',
    hobbies: ['Tennis', 'Biking', 'Archery'],
    hometown: {
      city: 'Albany',
      state: 'NY'
    }
  },
  {
    username: 'david',
    email: 'david@test.com',
    yearsExperience: 12.5,
    favoriteLanguages: ['JavaScript', 'C#', 'Swift'],
    favoriteEditor: 'VS Code',
    hobbies: ['Volunteering', 'Biking', 'Coding'],
    hometown: {
      city: 'Los Angeles',
      state: 'CA'
    }
  }
];

/*Write a function called printEmails which console.log’s each email for the users.*/
function printEmails(users){
    users.forEach(function(obj){
        console.log(obj.email);
    });
}

printEmails(users);
// larry@foo.com
// jane@test.com
// sam@test.com
// anne@test.com
// david@test.com

/*Write a function called printHobbies which console.log’s each hobby for each user.*/
function printHobbies(users){
    users.forEach(function(obj){
        obj.hobbies.forEach(function(hobby){
            console.log(hobby);
        });
    });
}

printHobbies(users);
// "Fishing",
// "Sailing",
// "Hiking",
// "Swimming", ...

/*Write a function called findHometownByState which returns the first user which has a hometown of the state that is passed in*/
function findHometownByState(users, state){
    let arr = Object.values(users);
    return arr.find(function(obj){
        return obj.hometown && obj.hometown.state === state;
    });
}

findHometownByState(users, 'CA');
/*/
{
    username: "larry",
    email: "larry@foo.com",
    years_experience: 22.1,
    favorite_languages: ["Perl", "Scala", "C++"],
    favorite_editor: "Vim",
    hobbies: ["Fishing", "Sailing", "Hiking"],
    hometown: {
        city: "San Francisco",
        state: "CA"
    }
}
/*/

/*Write a function called allLanguages which returns an array of all of the unique values*/
function allLanguages(users){
    let languages = [];
    users.map(function(obj){
        obj.favoriteLanguages.map(function(language){
            if(!languages.includes(language)){
                languages.push(language);
            }
        });
    });
    return languages;
}

allLanguages(users);
// ["Perl", "Scala", "C++","Haskell", "PHP","JavaScript","Ruby", "Python", "Go","C#", "F#", "Swift"]

/*Write a function called hasFavoriteEditor which returns a boolean if any of the users have the editor passed in*/

//'any of the users' -> some method

function hasFavoriteEditor(users, editor){
    let arr = Object.values(users);
    return arr.some(function(user){
        return user.favoriteEditor === editor;
    });
}

hasFavoriteEditor(users, 'VS Code'); // true
hasFavoriteEditor(users, 'Eclipse'); // false

/*Write a function called findByUsername which takes in a string and returns an object in the users array that has that username*/
function findByUsername(users, str){
    let arr = Object.values(users);
    return arr.find(function(user){
        return user.username === str;
    });
}

findByUsername(users, 'david');
/*/
{
    username: "david",
    email: "david@test.com",
    years_experience: 12.5,
    favorite_languages: ["JavaScript", "C#", "Swift"],
    favorite_editor: "VS Code",
    hobbies: ["Volunteering", "Biking", "Coding"],
    hometown: {
        city: "Los Angeles",
        state: "CA"
    }
}
/*/

// PART 2

/*Write a function called vowelCount that accepts a string and returns an object with each key being the vowel and the value 
being the number of times the vowel occurs in the string (the order of keys in the object does not matter).*/

//declare vowels var
//turn str into lower case and split into arr
//filter only vowels
//use reduce to get count vowels and create an obj 
    //if char is already in acc obj
        //increment count
    //else,
        //set val to 1
    //return acc to update obj
//return countObj

function vowelCount(str){
    let vowels = 'aeiou';
    let arr = str.toLowerCase().split('');
    let vowelArr = arr.filter(char => vowels.includes(char));
    let countObj = vowelArr.reduce(function(acc, curr){
        if(curr in acc){
            acc[curr]++;
        }
        else{
            acc[curr] = 1;
        }
        return acc;
    }, {});
    return countObj;
}

vowelCount('incredible'); // {i:2, e: 2}
vowelCount('awesome'); // {a:1, e:2, o:1}

/*Write a function called removeVowels that accepts a string and returns an array of each character that is not a vowel 
(y should not count as a vowel for this function).*/

//use filter to return a new arr with only non-vowels

//declare vowels var
//split str into arr 
//filter out vowels and return

function removeVowels(str){
    let vowels = 'aeiou';
    let arr = str.split('');
    return arr.filter(char => !vowels.includes(char));
}

//same as:

function removeVowels(str) {
    let vowels = 'aeiou';
    let arr = str.split('');
    return arr.filter(function(char) {
        return !vowels.includes(char);
    });
  }

removeVowels('amazing'); // ["m","z","n","g"]
removeVowels('fun'); // ["f","n"]
removeVowels('silly'); // ["s","l","l","y"]

