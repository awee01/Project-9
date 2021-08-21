// function to generate markdown for README
function generateMarkdown(data) {

  // To assign badge value based on badge selected
  switch(data.license) {
    case 'Apache': badge = 'Apache%202.0';
    break;
    
    case 'MIT': badge = 'MIT';
    break;

    case 'Mozilla': badge = 'MPL%202.0';
    break;

    case 'GNU': badge = 'GPLv3';
    break;

    case 'Boost': badge = 'Boost%201.0';
    break;

    case 'BSD': badge = 'BSD%203';
    break;

    case 'ISC': badge = 'ISC';
    break;

    case 'IBM': badge = 'IPL%201.0';
    break;

    case 'Unlicense': badge = 'Unlicense';
    break;

    case 'Eclipse': badge = 'EPL%201.0';
    break;
  
  }

    // Populating README
    return `

    # ${data.title}


    ## Description:
    
    ${data.description}
    

    ## Table of Contents 

    * [Installation](#Installation)
    * [Usage](#Usage)
    * [License](#License)
    * [Contributions](#Contributions)
    * [Tests](#Tests)
    * [Questions](#Questions)

    ## Installation:

    ${data.installation}

    ## Usage:

    ${data.usage}

    ## Licensing:

    ![License](https://img.shields.io/badge/License-${badge}-blue.svg)

    <br>

    This application is under the ${data.license} license. 

    ## Contributions:

    ${data.contributing}

    ## Tests:

    ${data.tests}

    ## Questions?:

    Contact me at:

    - Github: [${data.username}](https://github.com/${data.username})

    <br>
    
    - Email: ${data.email} 
    
    `;
  }
  
  module.exports = generateMarkdown;