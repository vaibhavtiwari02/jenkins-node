pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Clone the repository
                checkout scm
            }
        }
         stage('SonarQube Analysis') {
        def scannerHome = tool 'SonarScanner';
        withSonarQubeEnv() {
      sh "${scannerHome}/bin/sonar-scanner"
    }
  }
        stage('Install Dependencies') {
            steps {
                script {
                    // Install dependencies
                    sh 'npm install'
                }
            }
        }
        stage('Run Application') {
            steps {
                script {
                    // Run the application (adjust as needed for your deployment scenario)
                    sh 'pm2 restart index.js &'
                    // Optionally, use a different port or log the output as needed
                }
            }
        }
    }

    post {
        always {
            // Clean up (if needed)
            echo 'Cleaning up...'
        }
    }
}
