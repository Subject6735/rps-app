module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                mainfont: ['Barlow Semi Condensed', 'sans-serif'],
            },

            colors: {
                'text-dark': 'hsl(229, 25%, 31%)',
                'text-score': 'hsl(229, 64%, 46%)',
                'header-outline': 'hsl(217, 16%, 45%)',
                'overlay-bg': 'rgba(0, 0, 0, 0.5)',

                'rock-gradient': 'hsl(349, 71%, 52%)', //'linear-gradient(hsl(349, 71%, 52%), hsl(349, 70%, 56%))',
                'paper-gradient': 'hsl(230, 89%, 62%)', //'linear-gradient(hsl(230, 89%, 62%), hsl(230, 89%, 65%))',
                'scissors-gradient': 'hsl(39, 89%, 49%)', //'linear-gradient(hsl(39, 89%, 49%), hsl(40, 84%, 53%))',
                'lizard-gradient': 'hsl(261, 73%, 60%)', //'linear-gradient(hsl(261, 73%, 60%), hsl(261, 72%, 63%))',
                'spock-gradient': 'hsl(189, 59%, 53%)', //'linear-gradient(hsl(189, 59%, 53%), hsl(189, 58%, 57%))',
                //'mainbg-gradient': 'hsl(214, 47%, 23%)', //'radial-gradient(hsl(214, 47%, 23%), hsl(237, 49%, 15%))',
            },

            backgroundImage: {
                'rock-bg': "url('./images/icon-rock.svg')",
                'paper-bg': "url('./images/icon-paper.svg')",
                'scissors-bg': "url('./images/icon-scissors.svg')",
                'lizard-bg': "url('./images/icon-lizard.svg')",
                'spock-bg': "url('./images/icon-spock.svg')",

                'pentagon-bg': "url('./images/bg-pentagon.svg')",
                'mainbg-gradient': 'radial-gradient(hsl(214, 47%, 23%), hsl(237, 49%, 15%))',
            },

            boxShadow: {
                'winner-circles': '0 0 0 50px rgba(131, 131, 131, 0.1), 0 0 0 100px rgba(170, 170, 170, 0.06), 0 0 0 150px rgba(212, 212, 212, 0.04)',
            },
        },
    },
    plugins: [],
};
