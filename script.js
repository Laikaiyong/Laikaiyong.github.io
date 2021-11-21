let social_media = [
    {
        Title: "LinkedIn",
        Link: "https://www.linkedin.com/in/lai-kai-yong",
        Icon: `<i class="fab fa-linkedin"></i>`,
        Description: "LinkedIn Lai Kai Yong"
    },
    {
        Title: "Instagram",
        Link: "https://www.instagram.com/vandyck.lai/",
        Icon: `<i class="fab fa-instagram"></i>`,
        Description: "Instagram @vandyck.lai"
    },
    {
        Title: "Facebook",
        Link: "https://www.facebook.com/vandycklaikaiyong8/",
        Icon: `<i class="fab fa-facebook"></i>`,
        Description: "Facebook Vandyck Lai Kai Yong"
    },
    {
        Title: "Twitter",
        Link: "https://twitter.com/KaiVandyck",
        Icon: `<i class="fab fa-twitter"></i>`,
        Description: "Twitter @KaiVandyck"
    },
    {
        Title: "Discord",
        Link: "https://discord.com/users/753936966038323260/",
        Icon: `<i class="fab fa-discord"></i>`,
        Description: "Discord Vandyck#7726"
    },
    {
        Title: "Github",
        Link: "https://github.com/Laikaiyong",
        Icon: `<i class="fab fa-github"></i>`,
        Description: "Github Laikaiyong"
    },
    {
        Title: "Stack Overflow",
        Link: "https://stackoverflow.com/users/15029642/lai-kai-yong",
        Icon: `<i class="fab fa-stack-overflow"></i>`,
        Description: "Stack Overflow Lai Kai Yong"
    },
    {
        Title: "TWB",
        Link: "https://kato.translatorswb.org/6c614646513962672f335a6d635579726c506e5742513d3d3a3ab987681d20198eae05fd370353e1bd0f/key/",
        Icon: `<i class="fas fa-language"></i>`,
        Description: "Translator Without Borders Lai Kai Yong"
    },
    {
        Title: "Mopress.io",
        Link: "https://tantannews.com/author/36534",
        Icon: `<i class="fas fa-pen-fancy"></i>`,
        Description: "Mopress.io @ Tan Tan News 亦梦"
    },
    {
        Title: "Mail",
        Link: "mailto:vandycklai@gmail.com",
        Icon: `<i class="fa fa-envelope icon"></i>`,
        Description: "E-mail vandycklai@gmail.com"
    }
]

function addSocialMedia(title, link, icon, description){
    $('.linkarea').append(`
        <a class="pnc" href="${link}" target="_blank" title="${description}">
            ${icon}
            ${title}
        </a>
    `);
}

$(document).ready(function () {
    social_media.forEach((item) => {
        addSocialMedia(item.Title, item.Link, item.Icon, item.Description);
    });
});