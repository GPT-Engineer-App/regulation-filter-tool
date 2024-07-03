# regulation-filter-tool

here is my code:
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Regulation Filter Tool</title>
    <style>
        /*STYLING - CSS*/
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
        }

        header,
        footer {
            display: flex;
            align-items: center;
            padding: 10px;
            background: #f8f8f8;
            border-bottom: 1px solid #ccc;
        }

        .logo {
            max-height: 50px;
            /* Adjust as needed */
            margin-right: 20px;
        }

        .container {
            display: flex;
            height: 100vh;
        }

        .sidebar {
            width: 300px;
            background-color: #f4f4f4;
            border-right: 1px solid #ddd;
            padding: 20px;
            overflow-y: auto;
        }

        .sidebar h2 {
            font-size: 1.2em;
            margin-top: 0;
        }

        .accordion {
            cursor: pointer;
            padding: 10px;
            text-align: left;
            border: none;
            outline: none;
            transition: 0.4s;
            width: 100%;
            font-size: 1em;
            margin: 5px 0;
            background-color: #eee;
        }

        .accordion-content {
            display: none;
            overflow: hidden;
            padding: 10px;
            border-top: 1px solid #ddd;
        }

        .accordion-content select,
        .accordion-content button {
            width: 100%;
            padding: 10px;
            margin-top: 10px;
            font-size: 1em;
        }

        .main-content {
            flex: 1;
            padding: 20px;
            overflow-y: auto;
        }

        .main-content h2 {
            font-size: 1.5em;
            margin-top: 0;
        }

        .results ul {
            list-style-type: none;
            padding: 0;
        }

        .results li {
            background: #eee;
            margin: 5px 0;
            padding: 10px;
            border: 1px solid #ddd;
        }

        .dialog {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .dialog-content {
            background-color: #fff;
            margin: 15% auto;
            padding: 20px;
            border: 1px solid #888;
            width: 80%;
            border-radius: 5px;
        }

        .dialog-content .close {
            color: #aaa;
            float: right;
            font-size: 28px;
            font-weight: bold;
        }

        .dialog-content .close:hover,
        .dialog-content .close:focus {
            color: black;
            text-decoration: none;
            cursor: pointer;
        }

        .dialog table {
            width: 100%;
            border-collapse: collapse;
        }

        .dialog th,
        .dialog td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
        }

        .dialog th {
            background-color: #f2f2f2;
        }
    </style>
</head>

<header>
    <!--Title and logo-->
    <img src="https://images.squarespace-cdn.com/content/v1/61d8f89da912a447b355c04c/907be22c-956f-4a77-b4ea-1d849dcb81c5/Logo+Full+-+Black+v.6.png"
        alt="Logo" class="logo">
    <h1>Advanced Regulatory Tool</h1>
</header>

<body>
    <div class="container">
        <div class="sidebar">
            <h2>Filter Regulations</h2>
            <!---FAR Part 23 (Amdt 64 and later)-->
            <button class="accordion">Part 23—Airworthiness Standards: Normal Category Airplanes</button>
            <div class="accordion-content">
                <select id="subpartTitleF23L">
                    <option value="">Select Design Standard</option>
                </select>
                <select id="amendmentF23L"> <!--Amendements relevant to FAR Part 23-->
                    <option value="">Select Amendment</option>
                    <option value="Amdt 64">Amdt 64</option>
                    <option value="Amdt 65">Amdt 65</option>
                </select>
                <button onclick="filterRegulations('F23L')">Filter</button> <!--Filter button to display regs-->
                <button onclick="interact()">Interact</button>
            </div>

            <!----->

            <!---FAR Part 25 (latest)-->
            <button class="accordion">Part 25—Airworthiness Standards: Transport Category Airplanes</button>
            <div class="accordion-content">
                <select id="subpartTitleF25L">
                    <option value="">Select Design Standard</option>
                </select>
                <select id="amendmentF25L"> <!--Amendements relevant to FAR Part 25-->
                    <option value="">Select Amendment</option>
                    <option value="Initial">Initial</option>
                    <option value="Amdt 3">Amdt 3</option>
                    
                    <option value="Correction">Correction</option>
                </select>
                <button onclick="filterRegulations('F25L')">Filter</button> <!--Filter button to display regs-->
                <button onclick="interact()">Interact</button>
            </div>

            <!----->

            <!---FAR Part 27 (latest)-->
            <button class="accordion">Part 27—Airworthiness Standards: Normal Category Rotorcraft</button>
            <div class="accordion-content">
                <select id="subpartTitleF27L">
                    <option value="">Select Design Standard</option>
                </select>
                <select id="amendmentF27L"> <!--Amendements relevant to FAR Part 27-->
                    <option value="">Select Amendment</option>
                    <option value="Initial">Initial</option>
                    <option value="Amdt 2">Amdt 2</option>
                    

                </select>
                <button onclick="filterRegulations('F27L')">Filter</button> <!--Filter button to display regs-->
                <button onclick="interact()">Interact</button>
            </div>

            <!----->

            <!---FAR Part 29 (latest)-->
            <button class="accordion">Part 29—Airworthiness Standards: Transport Category Rotorcraft</button>
            <div class="accordion-content">
                <select id="subpartTitleF29L">
                    <option value="">Select Design Standard</option>
                </select>
                <select id="amendmentF29L"> <!--Amendements relevant to FAR Part 29-->
                    <option value="">Select Amendment</option>
                    <option value="Initial">Initial</option>
                    <option value="Amdt 2">Amdt 2</option>
                    
                </select>
                <button onclick="filterRegulations('F29L')">Filter</button> <!--Filter button to display regs-->
                <button onclick="interact()">Interact</button>
            </div>

            <!----->
        </div>
        <div class="main-content">
            <h2>Results</h2>
            <div class="results" id="results"></div> <!--Displays results that are filtered-->
        </div>
    </div>
    <footer> <!--Logo and title at the bottom-->
        <img src="https://images.squarespace-cdn.com/content/v1/61d8f89da912a447b355c04c/1668676749056-04KMUGV3WW3MYKK4Y9G6/Logo+Mini+v.1.png"
            alt="Logo" class="logo">
        <h3>Advanced Regulatory Tool</h3>
    </footer>

    <script>
        // Toggle accordion content
        document.querySelectorAll('.accordion').forEach(button => {
            button.addEventListener('click', () => {
                const content = button.nextElementSibling;
                content.style.display = content.style.display === 'block' ? 'none' : 'block';
            });
        });
        // Fetch and populate subpart titles FAR 23 LATEST
        fetch('design_standards.json')
            .then(response => response.json())
            .then(data => {
                const subpartTitleSelect = document.getElementById('subpartTitleF23L');
                const subparts = data['FAR 23 (Amdt. 64 and beyond)']['Subparts'];
                for (const subpart in subparts) {
                    const option = document.createElement('option');
                    option.value = subpart;
                    option.textContent = subpart;
                    subpartTitleSelect.appendChild(option);
                }
            })
            .catch(error => console.error('Error fetching JSON:', error));
        // Fetch and populate subpart titles - Additional Design Standards FAR 25 LATEST
        fetch('design_standards.json')
            .then(response => response.json())
            .then(data => {
                const subpartTitleSelect = document.getElementById('subpartTitleF25L');
                const subparts = data['FAR 25 (latest)']['Subparts'];
                for (const subpart in subparts) {
                    const option = document.createElement('option');
                    option.value = subpart;
                    option.textContent = subpart;
                    subpartTitleSelect.appendChild(option);
                }
            })
            .catch(error => console.error('Error fetching JSON:', error));
        // Fetch and populate subpart titles - Additional Design Standards FAR 27 LATEST
        fetch('design_standards.json')
            .then(response => response.json())
            .then(data => {
                const subpartTitleSelect = document.getElementById('subpartTitleF27L');
                const subparts = data['FAR 27 (latest)']['Subparts'];
                for (const subpart in subparts) {
                    const option = document.createElement('option');
                    option.value = subpart;
                    option.textContent = subpart;
                    subpartTitleSelect.appendChild(option);
                }
            })
            .catch(error => console.error('Error fetching JSON:', error));
        // Fetch and populate subpart titles - Additional Design Standards FAR 29 LATEST
        fetch('design_standards.json')
            .then(response => response.json())
            .then(data => {
                const subpartTitleSelect = document.getElementById('subpartTitleF29L');
                const subparts = data['FAR 29 (latest)']['Subparts'];
                for (const subpart in subparts) {
                    const option = document.createElement('option');
                    option.value = subpart;
                    option.textContent = subpart;
                    subpartTitleSelect.appendChild(option);
                }
            })
            .catch(error => console.error('Error fetching JSON:', error));
        // Filter regulations based on selected criteria
        function filterRegulations(part) {
            let subpartTitle, amendment;

            // Get the selected subpart title and amendment based on the part 
            if (part === 'F23L') {
                subpartTitle = document.getElementById('subpartTitleF23L').value;
                amendment = document.getElementById('amendmentF23L').value;
            } else if (part === 'F25L') {
                subpartTitle = document.getElementById('subpartTitleF25L').value;
                amendment = document.getElementById('amendmentF25L').value;
            } else if (part === 'F27L') {
                subpartTitle = document.getElementById('subpartTitleF27L').value;
                amendment = document.getElementById('amendmentF27L').value;
            } else if (part === 'F29L') {
                subpartTitle = document.getElementById('subpartTitleF29L').value;
                amendment = document.getElementById('amendmentF29L').value;
            }

            const resultsDiv = document.getElementById('results');


            // Validate that both subpart title and amendment are selected
            if (!subpartTitle) {
                resultsDiv.innerHTML = '<p>Please select both a subpart title and an amendment.</p>';
                return;
            }

            if (!amendment) {
                resultsDiv.innerHTML = '<p>Please select an amendment.</p>';
                return;
            }

            // Fetch the JSON data
            fetch('design_standards.json')
                .then(response => response.json())
                .then(data => {
                    let subpartData;
                    // Assign subpart data based on the selected part and subpart title
                    if (part === 'F23L') {
                        subpartData = data['FAR 23 (Amdt. 64 and beyond)']['Subparts'][subpartTitle];
                    } else if (part === 'F25L') {
                        subpartData = data['FAR 25 (latest)']['Subparts'][subpartTitle];
                    } else if (part === 'F27L') {
                        subpartData = data['FAR 27 (latest)']['Subparts'][subpartTitle];
                    } else if (part === 'F29L') {
                        subpartData = data['FAR 29 (latest)']['Subparts'][subpartTitle];
                    }

                    // If no subpart data is found, display an error message
                    if (!subpartData || !subpartData.regulations) {
                        resultsDiv.innerHTML = '<p>Subpart not found.</p>';
                        return;
                    }

                    let resultsHTML = '';

                    // Loop through the regulations and generate the results HTML
                    subpartData.regulations.forEach(reg => {
                        if (reg[amendment]) {
                            resultsHTML += <h3>${reg['Section Title']}</h3>;
                            resultsHTML += <ul><li>${reg[amendment]}</li></ul>;
                        }
                    });

                    // Display the results or a message if no regulations are found
                    resultsDiv.innerHTML = resultsHTML || '<p>No regulations found for the selected amendment.</p>';
                })
                .catch(error => console.error('Error fetching JSON:', error));
        }
        // Interact button
        function interact() {
            const resultsDiv = document.getElementById('results');
            const regulations = resultsDiv.querySelectorAll('h3');

            if (regulations.length === 0) {
                alert('Please generate results first.');
                return;
            }

            // Create the dialog box
            const dialog = document.createElement('div');
            dialog.classList.add('dialog');
            dialog.innerHTML = 
        <div class="dialog-content">
            <span class="close" onclick="closeDialog()">&times;</span>
            <h2>Compliance Matrix</h2>
            <table>
                <thead>
                    <tr>
                        <th>Regulation</th>
                        <th>Means of Compliance (MOC)</th>
                        <th>Comment</th>
                    </tr>
                </thead>
                <tbody id="complianceMatrixBody">
                    <!-- Rows will be dynamically populated here -->
                </tbody>
            </table>
        </div>
    ;
            document.body.appendChild(dialog);

            // Populate the Regulation column
            const complianceMatrixBody = document.getElementById('complianceMatrixBody');
            regulations.forEach(regulation => {
                const tr = document.createElement('tr');
                tr.innerHTML = 
            <td>${regulation.textContent}</td>
            <td>
                <select>
                    <option value="NA" selected>NA</option> 
                    <option value="DE">DE</option>
                    <option value="AN">AN</option>
                    <option value="GT">GT</option>
                    <option value="FT">FT</option>
                    <option value="SI">SI</option>
                </select>
            </td>
            <td><textarea></textarea></td>
        ;
                complianceMatrixBody.appendChild(tr);
            });
        }

        function closeDialog() {
            const dialog = document.querySelector('.dialog');
            dialog.parentNode.removeChild(dialog);
        }

    </script>
</body>
</html>


I would like only the section title to be visible and the amendment to drop down when the section it is under, is clicked

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React with shadcn-ui and Tailwind CSS.

- Vite
- React
- shadcn-ui
- Tailwind CSS

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/regulation-filter-tool.git
cd regulation-filter-tool
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
