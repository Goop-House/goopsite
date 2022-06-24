node{
   stage('SCM Checkout'){
      git branch: 'devops', credentialsId: 'jenkins-github-auth', url: 'https://github.com/Goop-House/goopsite.git'
   }
   stage('Initialize Docker'){
        def dockerHome = tool 'localDocker'
        env.PATH = "${dockerHome}/bin:${env.PATH}"
   }
   stage('Build Docker Image'){
     sh 'docker build . -t bardiaanvari/goophousewebsite:latest'
   }
   stage('Push Docker Image'){
     withCredentials([string(credentialsId: 'docker-pwd', variable: 'dockerHubPwd')]) {
        sh "docker login -u bardiaanvari -p ${dockerHubPwd}"
     }
     sh 'docker push bardiaanvari/goophousewebsite:latest'
   }
   stage('Pull and Run Remote Container'){
     def dockerRun = '''docker stop $(docker ps -aq  --filter "name=goop-house-website"); \
     docker rm $(docker ps -aq  --filter "name=goop-house-website"); \
     docker rmi bardiaanvari/goophousewebsite:latest; \
     docker pull bardiaanvari/goophousewebsite:latest && \
     docker run -p 778:80 -d \
     --name goop-house-website -e \
     bardiaanvari/goophousewebsite:latest
     '''
     def dockerRun2 = '''docker run -p 778:80 -d \
     --name goop-house-website -e \
     bardiaanvari/goophousewebsite:latest
     '''
     try{
         sshagent(['dionysus-portainer']) {
           sh "ssh -o StrictHostKeyChecking=no bardia@192.168.0.34 ${dockerRun}"
         }
        } catch(Exception e){
            echo "Container does not exist, creating."
            sshagent(['dionysus-portainer']) {
                sh "ssh -o StrictHostKeyChecking=no bardia@192.168.0.34 ${dockerRun2}"
            }
        }
        

    }
    stage('Notify Webhooks'){
        discordSend description: 'Jenkins Pipeline Build', enableArtifactsList: false, footer: "Build #${env.BUILD_NUMBER} ${currentBuild.currentResult}", image: '', link: env.BUILD_URL, result: currentBuild.currentResult, scmWebUrl: '', showChangeset: true, thumbnail: 'https://a.slack-edge.com/80588/img/services/jenkins-ci_512.png', title: env.JOB_NAME, webhookURL: 'placeholder'
    }
}
