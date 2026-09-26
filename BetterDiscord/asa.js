
/**
     * @name Account status adult
     * @author HNoise7676
     * @description all this script does is change your account verification status from unknown to adult letting you access age locked discord servers without needing to show your id (we all know why we don't share it)
     * @version 1
     * @source https://github.com/HNoise7676/Discord-Plugins
     * @updateUrl https://github.com/HNoise7676/Discord-Plugins/blob/main/BetterDiscord/asa.js
*/
    module.exports = class Bypass {

        start() {

            // temp 
            setInterval(async () => {
              await patch()

            }, 5000);


            async function patch() {
                const UserStore = BdApi.findModuleByProps('getCurrentUser', 'getUser').getCurrentUser();
                UserStore.nsfwAllowed = true;

                if (UserStore.nsfwAllowed == false) {
                    UserStore.nsfwAllowed = true;
                }
            }

        }

        stop() {
            const UserStore = BdApi.findModuleByProps('getCurrentUser', 'getUser').getCurrentUser();
            UserStore.nsfwAllowed = false;


        };
}
