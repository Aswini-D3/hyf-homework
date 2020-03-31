const allowedPositiveWords=["super", "awesome", "happy", "excited"];
const allowedNegativeWords=["hate", "boring", "sad", "unhappy"];

function getSentimentScore(incomingString)
{
    let result=
    {
        scrore:0,
        positiveWords:[],
        negativeWords:[]
    }
    const wordString=incomingString.split('');
    for(let i=0;i<wordString.length;i++)
    {
        const myWord=wordString[i];
        if(allowedPositiveWords.includes(myWord))
        {
            result.score++;
            result.positiveWords.push(myWord);

        }
        else if(allowedNegativeWords.includes(myWord))
        {
            result.score--;
            result.negativeWords.push(myWord);
        }
        
    }
    return result;
}

const positiveSentence=getSentimentScore("I am mega super awesome happy");
console.log(positiveSentence);

const negativeSentence=getSentimentScore("I hate doing boring stuff");
console.log(negativeSentence);