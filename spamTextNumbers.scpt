set targetPhoneNumber to "+13115552368" // input a phone number here
set messageText to "Get spammed 😭💔" // enter what text you would like to spam

tell application "Messages"
	repeat
		set targetService to 1st account whose service type = iMessage
		set targetBuddy to participant targetPhoneNumber of targetService
		send messageText to targetBuddy
    /* delay 1 <- can delay each message by a second */
	end repeat
end tell
