const inquirer = require("inquirer") //connects the inquirer library for use in this file
const fs = require("fs") //connects the fs library 
const utils = require("util") //connects the utils library

//prompts for user input/choice that will be written to README file
inquirer.prompt([
    {
    name: "title",
    type: "input",
    message: "What is the title of your project? "
    },
    {
        name: "description",
        type: "input",
        message: "Describe the project: "
    },
    {
        name: "tableContents",
        type: "confirm",
        message: "Do you want a Table of Contents? "
    },
    {
        name: "install",
        type: "input",
        message: "Provide instructions for installation: "
    },
    {
        name: "usage",
        type: "input",
        message: "Provide instructions for use: "
    },
    {
        name: "license",
        type: "list",
        message: "Choose a License: ",
        choices: ["BSD", "MIT", "GPL"]
    },
    {
        name: "username",
        type: "input",
        message: "What is your GitHub username? "
    },
    {
        name: "email",
        type: "input",
        message: "What is your e-mail? "
    },
])
.then(function(answer){
    fs.appendFileSync("README.md", answer.title + "\n" + "\n", function(err) {
        if (err) {
          return console.log(err);
        }
    });
    fs.appendFileSync("README.md", answer.description + "\n" + "\n", function(err) {
        if (err) {
          return console.log(err);
        }
    });
    var tableOfContents = "1. Installation" + "\n" + "2. Usage" + "\n"  + "3. Contact" + "\n" + "4. License";
    if (answer.tableContents === true){
        fs.appendFileSync("README.md", tableOfContents + "\n" + "\n" + "\n", function(err) {
            if (err) {
              return console.log(err);
            }
        });
    } else {
        console.log("No Table of Contents")
    };
    fs.appendFileSync("README.md", "1. Installation:" + "\n" + answer.install + "\n" + "\n", function(err) {
        if (err) {
          return console.log(err);
        }
    });
    fs.appendFileSync("README.md", "2. Usage:" + "\n" + answer.usage + "\n" + "\n", function(err) {
        if (err) {
          return console.log(err);
        }
    });
    fs.appendFileSync("README.md", "3. Contact:" + "\n" + "E-mail: " + answer.email + "\n", function(err) {
        if (err) {
            return console.log(err);
        }
    });
    fs.appendFileSync("README.md", "GitHub Username: " + answer.username + "\n" + "\n", function(err) {
        if (err) {
            return console.log(err);
        }
    });
    if (answer.license === "BSD"){
        var bsdLicense = "Copyright (c) 2020, Joshua E. Thompson" + "\n" +
        "Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:" + "\n" +
        "1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer." + "\n" +
        "2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution." + "\n" + "\n" +
        
        "THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS 'AS IS' AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE."
        fs.appendFileSync("README.md", "4. License:" + "\n" + bsdLicense + "\n" + "\n", function(err) {
            if (err) {
              return console.log(err);
            }
        });

    }
    if (answer.license === "MIT") {
        var mitLicense = "Copyright (c) 2020 Joshua E. Thompson" + "\n" + "\n" +

        "Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:" + "\n" + "\n" +
        
        "The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software." + "\n" +
        
        "THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE."
        fs.appendFileSync("README.md", "4. License:" + "\n" + mitLicense + "\n" + "\n", function(err) {
            if (err) {
              return console.log(err);
            }
        });
    }
    if (answer.license === "GPL") {
        var gplLicense = "This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version." + "\n" +
        "This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details. You should have received a copy of the GNU General Public License along with this program.  If not, see <https://www.gnu.org/licenses/>."
        fs.appendFileSync("README.md", "4. License:" + "\n" + gplLicense + "\n" + "\n", function(err) {
            if (err) {
              return console.log(err);
            }
        });  
    }
    console.log("Success! Writing README...")
})