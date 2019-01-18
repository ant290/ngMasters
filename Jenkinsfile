pipeline {
    agent { docker { image 'node:10.15.0' } }
	//agent any
    stages {
        stage('build') {
            steps {
                bat 'npm --version'
				bat 'ECHO hello world'
            }
        }
    }
}