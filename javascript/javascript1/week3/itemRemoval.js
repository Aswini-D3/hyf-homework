const vowels= ['a', 'e', 'i', 'o', 'u', 'x'];
const notVowel='x';
console.log(vowels);

for(var i=0;i<vowels.length;i++)
    {
        if(vowels[i]===notVowel)
        {
            vowels.splice(i,1);
        }
    }
console.log(vowels);



