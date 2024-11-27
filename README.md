# Dynamic Portfolio Website

A customizable portfolio website with a Flask backend and SQLite database. Features include real-time editing, animations, and a responsive design.

## Features
- Customizable user interface
- Real-time content editing
- Profile image management
- Projects showcase
- Skills and certifications display
- Work experience section
- Contact information
- Smooth animations
- Mobile-responsive design

## Prerequisites
- Python 3.7 or higher
- pip (Python package installer)
- Web browser (Chrome, Firefox, Safari, etc.)

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd dynamic-portfolio
   ```

2. **Set up Python virtual environment (recommended)**
   ```bash
   python -m venv venv
   
   # On Windows
   .\venv\Scripts\activate
   
   # On macOS/Linux
   source venv/bin/activate
   ```

3. **Install required packages**
   ```bash
   pip install flask flask-sqlalchemy flask-cors
   ```

4. **Project Structure**
   Ensure your project directory has the following structure:
   ```
   dynamic-portfolio/
   ├── app.py
   ├── static/
   │   ├── styles.css
   │   ├── script.js
   │   └── mad.jpg
   ├── templates/
   │   └── index.html
   └── README.md
   ```

## Running the Application

1. **Initialize the database**
   The database will be automatically created when you run the application for the first time.

2. **Start the Flask server**
   ```bash
   python app.py
   ```
   The server will start running on `http://localhost:5000`

3. **Access the website**
   Open your web browser and navigate to `http://localhost:5000`

## Usage

### Customizing Content

1. **Edit Mode**
   - Click the "Customize" button in the header to enter edit mode
   - Editable elements will be highlighted with a blue dashed border

2. **Profile Image**
   - Click the camera icon on the profile image to update it
   - Supported formats: JPG, PNG, GIF

3. **Adding Projects**
   - Click "Add Project" button in the Projects section
   - Fill in the project details in the modal form
   - Click Save to add the project

4. **Skills and Certifications**
   - Use the respective "Add" buttons to include new skills or certifications
   - Click on existing items to edit them

5. **Work Experience**
   - Click "Add Experience" to include new work experiences
   - Fill in the details in the modal form

### Saving Changes
- Changes are automatically saved when you click outside an editable field
- The database maintains all updates between sessions

## Troubleshooting

1. **Database Issues**
   - If you encounter database errors, delete the `portfolio.db` file and restart the application
   - The database will be recreated automatically

2. **Server Connection**
   - Ensure the Flask server is running
   - Check if port 5000 is available
   - Verify your firewall settings

3. **Image Upload**
   - Ensure the `static` directory has write permissions
   - Check if the image file size is within reasonable limits

## Development

### File Structure
- `app.py`: Flask backend and database models
- `index.html`: Main HTML template
- `styles.css`: CSS styling and animations
- `script.js`: Frontend JavaScript functionality

### Making Changes
1. Frontend modifications:
   - Edit `index.html` for structure changes
   - Modify `styles.css` for styling updates
   - Update `script.js` for new functionality

2. Backend modifications:
   - Edit `app.py` for database and API changes
   - Restart the Flask server after backend modifications

## License
This project is licensed under the MIT License - see the LICENSE file for details

## Support
For support, please open an issue in the repository or contact **usedforuda@gmail.com**
