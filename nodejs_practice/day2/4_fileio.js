import fs from "fs";

fs.writeFile(
    'text.txt',
    'hello',
    {
        encoding: 'utf-8',
    },
        function(err){
            if(err){
                console.log(err);
            }
            else{
                console.log('ok');
            }
        }
);
console.log('done')