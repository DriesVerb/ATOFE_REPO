import { StoryCta } from '#/components/storyCta/StoryCta'
import {Txt } from '#/elements'
import { routes } from '#/utils/const/routes'

export const DraftsView = () => {
  return (
    <>
      <Txt.H1 text="My Drafts" ngclass="col-span-1 md:col-span-5" />
      <StoryCta navigateTo={routes.story.create} />
    </>
  )
}
