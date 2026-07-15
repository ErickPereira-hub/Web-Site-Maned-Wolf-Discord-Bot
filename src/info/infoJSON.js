export let infoJSON = [
    {
        "url": "https://raw.githubusercontent.com/ErickPereira-hub/Web-Site-Maned-Wolf-Discord-Bot/refs/heads/main/src/imgs/examples/prob_new_members.png",
        "title" : "Member Prediction",
        "command": "wolf?predict_members_qtt",
        "desc" : "Shows the predicted number of members tomorrow aligned with the prediction error. 'Wolf?predict_members_qtt N' shows the prediction for the next N days from today's day, where N must be between 1 and 3. 'wolf?predict_members_qtt N show' works as before, but it also displays the polynomial used to compute the prediction."
    },
    {
        "url": "https://raw.githubusercontent.com/ErickPereira-hub/Web-Site-Maned-Wolf-Discord-Bot/refs/heads/main/src/imgs/examples/report.png",
        "title" : "Member Report",
        "command": "wolf?get_report_members format",
        "desc" : "Shows a report of member joins, leaves, and the total server member count. 'format' can be either 'table' or 'chart', with format as 'table' showing a table and format as 'chart' displaying the data as a chart."
    },
    {
        "url": "https://raw.githubusercontent.com/ErickPereira-hub/Web-Site-Maned-Wolf-Discord-Bot/refs/heads/main/src/imgs/examples/prob_new_msg.png",
        "title" : "New messages probability",
        "command": "wolf?get_prob_new_msg <min> <max>",
        "desc" : "Shows the probability of gaining <min> to <max> new members in the server tomorrow. The pattern is the same as the previous command."
    },
    {
        "url": "https://raw.githubusercontent.com/ErickPereira-hub/Web-Site-Maned-Wolf-Discord-Bot/refs/heads/main/src/imgs/examples/prob_new_members.png",
        "title" : "New members probability",
        "command": "wolf?get_prob_new_members <min> <max>",
        "desc" : "Shows the probability of getting bettween <min> and <max> new members in the server tomorrow. To see a distribution graph with the probabilities, use 'wolf?get_prob_new_members <min> <max> chart'. Detail: <min> and <max> are integers and the first must be lower or equal to the second number."
    },
    {
        "url": "https://raw.githubusercontent.com/ErickPereira-hub/Web-Site-Maned-Wolf-Discord-Bot/refs/heads/main/src/imgs/examples/nsfw.png",
        "title" : "NSFW quantity",
        "command": "wolf?get_nsfw_qtt",
        "desc" : "Displays the quantity of channels that are nsfw and the quantity of non-nsfw channels. To view this data as a pie chart, use 'wolf?get_nsfw_qtt chart."
    },
    {
        "url": "https://raw.githubusercontent.com/ErickPereira-hub/Web-Site-Maned-Wolf-Discord-Bot/refs/heads/main/src/imgs/examples/top_members_server.png",
        "title" : "Top members on server",
        "command": "wolf?get_top_members_on_server",
        "desc" : "Shows the most active members in the entire server based on message volume. 'wolf?get_top_members_on_channel chart' displays the data through a pie chart."
    },
    {
        "url": "https://raw.githubusercontent.com/ErickPereira-hub/Web-Site-Maned-Wolf-Discord-Bot/refs/heads/main/src/imgs/examples/top_members_ch.png",
        "title" : "Top members on channel",
        "command": "wolf?get_top_members_on_channel",
        "desc" : "Shows the most active members in the text channel where the command is placed based on message volume. 'wolf?get_top_members_on_channel chart' displays the data through a pie chart."
    },
    {
        "url": "https://raw.githubusercontent.com/ErickPereira-hub/Web-Site-Maned-Wolf-Discord-Bot/refs/heads/main/src/imgs/examples/top_active_ch.png",
        "title" : "Most active channels",
        "command": "wolf?get_top_active_channels",
        "desc" : "Shows the most active text channels based on message volume. To see the data distributed in a bar chart, use the command 'wolf?get_top_active_channels chart'."
    }
]