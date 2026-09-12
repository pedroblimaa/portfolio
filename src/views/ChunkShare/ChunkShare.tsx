import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './ChunkShare.scss'

const titles = {
  home: 'ChunkShare',
  privacy: 'Privacy Policy',
  terms: 'Terms of Service',
}

function Contact() {
  return <a href='mailto:pedroblimaa@gmail.com'>pedroblimaa@gmail.com</a>
}

function ChunkShare({ page }: { page: keyof typeof titles }) {
  useEffect(() => {
    const previousTitle = document.title
    document.title = page === 'home' ? 'ChunkShare' : `${titles[page]} | ChunkShare`
    window.scrollTo(0, 0)
    return () => {
      document.title = previousTitle
    }
  }, [page])

  return (
    <main className='chunkshare-page'>
      <nav className='chunkshare-nav' aria-label='ChunkShare'>
        <Link to='/chunkshare' aria-current={page === 'home' ? 'page' : undefined}>
          ChunkShare
        </Link>
        <Link to='/chunkshare/privacy' aria-current={page === 'privacy' ? 'page' : undefined}>
          Privacy Policy
        </Link>
        <Link to='/chunkshare/terms' aria-current={page === 'terms' ? 'page' : undefined}>
          Terms of Service
        </Link>
      </nav>
      <article className='default-card chunkshare-copy'>
        <h1 className='default-title'>{titles[page]}</h1>
        {page !== 'home' && <p className='chunkshare-date'>Last updated: September 12, 2026</p>}
        {page === 'home' && (
          <>
            <p className='chunkshare-intro'>Your Minecraft world, shared with friends.</p>
            <p>
              ChunkShare is a desktop app by Pedro Bonfilio that lets friends take turns hosting a
              Minecraft world on their own computers. No always-on server needed.
            </p>
            <p>
              Sign in with Google, create or join a shared world, and download its latest save.
              Start the server locally to play. When you stop it, ChunkShare uploads the new save to
              Google Drive so the next host can pick up where you left off.
            </p>
            <p>
              Google sign-in identifies you to your group. Google Drive stores the world and lets
              you invite friends. ChunkShare only requests access to files created with the app or
              explicitly shared with it.
            </p>
            <p>
              Read the <Link to='/chunkshare/privacy'>Privacy Policy</Link> and{' '}
              <Link to='/chunkshare/terms'>Terms of Service</Link>, or explore the{' '}
              <a href='https://github.com/pedroblimaa/chunk-share'>project on GitHub</a>.
            </p>
            <p>
              Questions? <Contact />
            </p>
          </>
        )}
        {page === 'privacy' && (
          <>
            <p>
              ChunkShare is developed by Pedro Bonfilio. Your worlds stay on your computer and in
              Google Drive. I don’t run a backend that receives your worlds or Google tokens.
            </p>
            <h2>Google account and Drive access</h2>
            <p>
              ChunkShare uses Google sign-in (openid, email and profile) to access your name, email,
              profile picture and account ID. These identify you in the app and show your group who
              is hosting or published a save.
            </p>
            <p>
              The app requests the <code>drive.file</code> permission to create, read, update and
              delete its world files and manage sharing. Access is limited to files created with
              ChunkShare or explicitly authorized for it, including through Google’s file picker. It
              does not request access to your entire Drive.
            </p>
            <h2>Storage and sharing</h2>
            <p>
              Your profile and settings are saved locally. Access and refresh tokens are encrypted
              on your device using Electron’s safeStorage. Worlds and hosting metadata are stored
              locally and, when you use Drive, in the world owner’s Google Drive.
            </p>
            <p>
              People with access to a world can read its save and shared metadata, including the
              host’s or publisher’s name, email, account ID and profile picture, save times, and
              hosting connection addresses. Google also handles account and file permissions. Tokens
              are never included in shared world files or invite links.
            </p>
            <p>
              Google user data is used only to provide these features, never sold or used for
              advertising. ChunkShare’s use and transfer of Google API data follows the{' '}
              <a href='https://developers.google.com/terms/api-services-user-data-policy'>
                Google API Services User Data Policy
              </a>
              , including its Limited Use requirements.
            </p>
            <h2>Removing your data</h2>
            <p>
              Sign out to remove the saved Google tokens and profile from the app. You can revoke
              ChunkShare’s access in your{' '}
              <a href='https://myaccount.google.com/connections'>Google Account connections</a>.
              Signing out or disconnecting Drive does not delete worlds.
            </p>
            <p>
              Delete local files on your computer and manage shared files and permissions in Google
              Drive. Copies already downloaded by friends may remain on their devices. I cannot
              access or delete these files for you. For help, or to request deletion of information
              you sent me by email, contact <Contact />.
            </p>
          </>
        )}
        {page === 'terms' && (
          <>
            <p>
              ChunkShare is a desktop app by Pedro Bonfilio for sharing Minecraft worlds. By using
              it, you agree to these terms.
            </p>
            <h2>Using the app</h2>
            <p>
              Only share worlds and files you have permission to use. Keep your Google account and
              computer secure, choose your world members carefully, and keep your own backups. You
              are responsible for the server you host and the content you share.
            </p>
            <p>
              Your use of Minecraft and Google Drive is also subject to their respective terms,
              including the <a href='https://www.minecraft.net/eula'>Minecraft EULA</a> and{' '}
              <a href='https://policies.google.com/terms'>Google Terms of Service</a>.
            </p>
            <h2>Availability and responsibility</h2>
            <p>
              ChunkShare is provided “as is.” It may have bugs or interruptions, and saves can be
              lost or overwritten. To the extent permitted by law, I provide no warranties and am
              not liable for losses caused by using the app. This does not limit rights that cannot
              legally be excluded.
            </p>
            <h2>About these terms</h2>
            <p>
              ChunkShare is not affiliated with or endorsed by Mojang, Microsoft or Google. The app
              and these terms may change; updates will be posted here with a new date. You can stop
              using the app at any time.
            </p>
            <p>
              Questions? <Contact />
            </p>
          </>
        )}
      </article>
    </main>
  )
}

export default ChunkShare
