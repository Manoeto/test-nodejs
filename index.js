#! /usr/bin/env node

const {exec, execSync} = require('child_process');
const { stderr } = require('process');

const [message, branchname] = process.argv.slice(2)

if(message && branchname){
   let {err, stdout,stderr} = execSync("git add .")
    if(!err){
        let {error, stdout,stderr} = execSync(`git commit -m "${message}"`)
        if(!err){
            let {errormessage, stdout,stderr} = execSync(`git push  origin "${branchname}"`)
            if(!errormessage){
                console.log("successfully pushed your code to github");
                    console.log(stdout);
            }
            }
        }
    }


    /*exc("git add .", (err,stdout,stderr)=>{
        if(err){throw new Error("something is wrong")}
        exec(`git commit -m "${message}"`, (err, stdout, stderr)=>{
            if(err){throw new Error("something is wrong")}

            exec(`git push origin ${branchname}`, (err,stdout, stderr
                )=>{
                    if(err){throw new Error("something is wrong")}
                    console.log("successfully pushed your code to github");
                    console.log(stdout);
                })
        })

    })*/

else{
    console.log("please provide 2 arguments, first arg is message you want to commit message, and second arg is your branch Name1");
}