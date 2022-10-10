
export function homePage() {
    return `

    <header>
    <div class="display_flex">
        <svg width="5vw" viewBox="0 0 180 162" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M1 75.7003L37.8455 106.994M1 75.7003L43.035 46.9306M1 75.7003L37.3265 4.53312M1 75.7003L22.277 112.041M43.035 46.9306L62.2362 60.5584M43.035 46.9306L37.3265 4.53312M62.2362 60.5584L90.2595 31.7886M62.2362 60.5584L81.4373 110.022M90.2595 31.7886L130.738 41.8833M90.2595 31.7886L62.2362 1M130.738 41.8833L156.685 71.6625M130.738 41.8833L62.2362 1M130.738 41.8833L143.192 26.2366M156.685 71.6625L179 66.1104M156.685 71.6625L136.446 105.479M179 66.1104L154.09 130.211M179 66.1104L143.192 26.2366M154.09 130.211L140.079 119.612M154.09 130.211L119.84 151.41M140.079 119.612L136.446 105.479M140.079 119.612L119.84 151.41M119.84 151.41L52.895 161M52.895 161L78.3236 127.183M52.895 161L38.3644 107.498L74.172 114.06M52.895 161L40.9592 142.83M78.3236 127.183L92.3353 113.555M78.3236 127.183L77.2857 121.631L74.172 114.06M92.3353 113.555L136.446 105.479M92.3353 113.555L81.4373 110.022M74.172 114.06L81.4373 110.022M37.3265 4.53312L62.2362 1M62.2362 1L143.192 26.2366M23.3149 114.06L26.4286 119.107M27.9854 121.126L35.2507 133.24M36.8076 136.268L38.8834 139.297"
                stroke="#FBBE86" stroke-width="3" />
        </svg>
        <h1 class="title">ALPHA<br />EDPEDRA</h1>
    </div>

    <nav class="display_flex">
        <a>
            <li class="nav_title nav_off"><button id="inventory" onclick="inventory()">Inventário</button></li>
        </a>
        <a>
            <li class="nav_title nav_on" ><button onclick="display()">Display</button></li>
        </a>
        <a>
            <li class="nav_title nav_off">Trocas</li>
        </a>
        <input class="round_input" type="text" title="Procure por outros usuários" id="profile_search"></input>
    </nav>

    <div class="display_flex display_gap">
        <svg class="icon nav_off" height="3vw" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M15.3723 13.0573C14.9709 12.1591 14.3885 11.3433 13.6574 10.6553C12.9285 9.96524 12.0651 9.41508 11.1149 9.03518C11.1064 9.03116 11.0979 9.02915 11.0893 9.02513C12.4149 8.1206 13.2766 6.64724 13.2766 4.98492C13.2766 2.23116 10.9149 0 8 0C5.08513 0 2.72344 2.23116 2.72344 4.98492C2.72344 6.64724 3.58514 8.1206 4.91066 9.02713C4.90215 9.03116 4.89364 9.03316 4.88513 9.03719C3.93194 9.41708 3.07663 9.96181 2.34259 10.6573C1.61219 11.3459 1.02984 12.1615 0.627709 13.0593C0.232652 13.9382 0.0195891 14.8805 5.32039e-05 15.8352C-0.000514675 15.8566 0.00346833 15.878 0.0117677 15.8979C0.020067 15.9179 0.0325146 15.9361 0.0483771 15.9515C0.0642397 15.9669 0.0831961 15.9791 0.104129 15.9874C0.125063 15.9957 0.14755 16 0.170265 16H1.44685C1.54047 16 1.61494 15.9296 1.61706 15.8432C1.65962 14.2915 2.31919 12.8382 3.48514 11.7367C4.69151 10.597 6.29363 9.96985 8 9.96985C9.70637 9.96985 11.3085 10.597 12.5149 11.7367C13.6808 12.8382 14.3404 14.2915 14.3829 15.8432C14.3851 15.9317 14.4595 16 14.5531 16H15.8297C15.8524 16 15.8749 15.9957 15.8959 15.9874C15.9168 15.9791 15.9358 15.9669 15.9516 15.9515C15.9675 15.9361 15.9799 15.9179 15.9882 15.8979C15.9965 15.878 16.0005 15.8566 15.9999 15.8352C15.9787 14.8744 15.768 13.9397 15.3723 13.0573ZM8 8.44221C7.02341 8.44221 6.10427 8.08241 5.41278 7.42915C4.7213 6.77588 4.34045 5.90754 4.34045 4.98492C4.34045 4.06231 4.7213 3.19397 5.41278 2.5407C6.10427 1.88744 7.02341 1.52764 8 1.52764C8.97659 1.52764 9.89573 1.88744 10.5872 2.5407C11.2787 3.19397 11.6595 4.06231 11.6595 4.98492C11.6595 5.90754 11.2787 6.77588 10.5872 7.42915C9.89573 8.08241 8.97659 8.44221 8 8.44221Z"
                fill="#533F36" />
        </svg>
        <svg class="icon nav_off" height="3vw" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.992 2H2V38H20M29 29L38 20L29 11M12 19.992H38" stroke="#533F36" stroke-width="3"
                stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    </div>

</header>

<section id="appHome"></section>
`

}