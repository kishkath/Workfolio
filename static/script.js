document.addEventListener('DOMContentLoaded', () => {
    const editModeBtn = document.getElementById('editModeBtn');
    const saveChangesBtn = document.getElementById('saveChangesBtn');
    const profileImageContainer = document.querySelector('.profile-image-container');
    const imageUploadOverlay = document.querySelector('.image-upload-overlay');
    const imageUploadInput = document.getElementById('imageUpload');
    const profileImage = document.getElementById('profileImage');
    
    if (!editModeBtn || !saveChangesBtn) {
        console.error('Required buttons not found!');
        return;
    }

    // Toggle edit mode
    editModeBtn.addEventListener('click', () => {
        console.log('Edit mode clicked');
        const isEditMode = document.body.classList.toggle('edit-mode');
        
        // Make editable elements editable
        const editableElements = document.querySelectorAll('.editable');
        editableElements.forEach(element => {
            element.contentEditable = isEditMode ? 'true' : 'false';
            if (isEditMode) {
                element.classList.add('editable-active');
            } else {
                element.classList.remove('editable-active');
            }
        });

        // Show/hide image upload overlay
        imageUploadOverlay.classList.toggle('hidden', !isEditMode);

        // Toggle save button
        saveChangesBtn.classList.toggle('hidden');
        editModeBtn.innerHTML = isEditMode ? 
            '<i class="fas fa-times"></i> Cancel' : 
            '<i class="fas fa-edit"></i> Customize';
    });

    // Save changes
    saveChangesBtn.addEventListener('click', async () => {
        try {
            const data = {
                name: document.getElementById('userName').textContent,
                summary: document.getElementById('profileSummary').textContent,
                email: document.getElementById('emailContact').textContent,
                linkedin: document.getElementById('linkedinContact').textContent
            };

            const response = await fetch('/api/profile', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error('Failed to save changes');
            }

            // Exit edit mode
            editModeBtn.click();
            showNotification('Changes saved successfully!');
        } catch (error) {
            console.error('Error saving changes:', error);
            showNotification('Failed to save changes', 'error');
        }
    });

    // Image zoom functionality
    if (profileImage) {
        profileImage.addEventListener('click', (e) => {
            // Only zoom if not in edit mode
            if (!document.body.classList.contains('edit-mode')) {
                createImageModal(profileImage.src);
            }
        });
    }

    // Handle image upload
    imageUploadInput.addEventListener('change', async (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 5000000) { // 5MB limit
                showNotification('Image size should be less than 5MB', 'error');
                return;
            }

            const formData = new FormData();
            formData.append('image', file);

            try {
                const response = await fetch('/api/upload-profile-image', {
                    method: 'POST',
                    body: formData
                });

                if (response.ok) {
                    const data = await response.json();
                    profileImage.src = data.image_url + '?t=' + new Date().getTime();
                    showNotification('Profile picture updated successfully!');
                } else {
                    throw new Error('Failed to upload image');
                }
            } catch (error) {
                console.error('Error uploading image:', error);
                showNotification('Failed to upload image', 'error');
            }
        }
    });
});

// Notification function
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

function toggleSkillsView() {
    const viewMode = document.getElementById('view-mode').value;
    const classifiedSkills = document.getElementById('classified-skills');
    const allSkills = document.getElementById('all-skills');

    if (viewMode === 'all') {
        classifiedSkills.style.display = 'none';
        allSkills.style.display = 'block';
    } else if (viewMode === 'classify') {
        classifiedSkills.style.display = 'block';
        allSkills.style.display = 'none';
    }
}


// Add these styles
const editableStyles = `
    .editable-active {
        padding: 5px !important;
        border: 1px dashed #b3b3b3 !important;
        border-radius: 4px !important;
        margin: 2px 0 !important;
        cursor: text !important;
    }

    /* Special styling for header name */
    #userName.editable-active {
        background-color: transparent !important;
        color: #ffffff !important;
        border-color: #333333 !important;
    }

    #userName.editable-active:hover {
        background-color: rgba(255, 255, 255, 0.1) !important;
        border-color: #444444 !important;
    }

    #userName.editable-active:focus {
        background-color: rgba(0, 0, 0, 0.8) !important;
        border-color: #666666 !important;
        box-shadow: 0 0 5px rgba(255, 255, 255, 0.2) !important;
    }

    /* Other editable elements (about me and contact) */
    .editable-active:not(#userName) {
        background-color: #f5f5f5 !important;
        color: #000000 !important;
    }

    .editable-active:not(#userName):hover {
        background-color: #ebebeb !important;
        border-color: #999999 !important;
    }

    .editable-active:not(#userName):focus {
        background-color: #ffffff !important;
        border-color: #007bff !important;
        box-shadow: 0 0 5px rgba(0, 123, 255, 0.3) !important;
    }

    .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 10px 20px;
        border-radius: 4px;
        color: white;
        z-index: 1000;
        animation: slideIn 0.3s ease-out;
    }

    .notification.success {
        background-color: #28a745;
    }

    .notification.error {
        background-color: #dc3545;
    }

    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    .editable {
        transition: all 0.3s ease !important;
    }
`;

// Add the styles to the document
const styleSheet = document.createElement("style");
styleSheet.textContent = editableStyles;
document.head.appendChild(styleSheet);

// Image modal styles and functionality remain the same...

