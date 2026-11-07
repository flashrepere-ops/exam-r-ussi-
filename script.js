/* --- EXAM EdTech - Logique & Intelligence Centrale --- */

// Gestionnaire global des données utilisateur (LocalStorage)
const ExamApp = {
    getUserData() {
        return {
            space: localStorage.getItem('exam_space') || 'francophone',
            country: localStorage.getItem('exam_country') || 'Togo',
            level: localStorage.getItem('exam_level') || 'BAC',
            series: localStorage.getItem('exam_series') || 'BAC D',
            balance: parseInt(localStorage.getItem('exam_balance') || '250'),
            subject: localStorage.getItem('current_subject') || 'SVT'
        };
    },

    saveUserData(key, value) {
        localStorage.setItem(key, value);
    },

    // Simulation de recharge sécurisée (Moov, Yas, CinetPay)
    rechargeWallet(amount) {
        let data = this.getUserData();
        data.balance += parseInt(amount);
        this.saveUserData('exam_balance', data.balance);
        return data.balance;
    },

    // Vérification et achat du Pass Premium (500 F)
    buyPass() {
        let data = this.getUserData();
        if (data.balance >= 500) {
            data.balance -= 500;
            this.saveUserData('exam_balance', data.balance);
            return { success: true, newBalance: data.balance };
        }
        return { success: false, message: "Solde insuffisant. Veuillez recharger votre compte." };
    }
};

// Export global pour utilisation dans les pages HTML
window.ExamApp = ExamApp;