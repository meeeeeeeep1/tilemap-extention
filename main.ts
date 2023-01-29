controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -175
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    animation.runImageAnimation(
    mySprite,
    assets.animation`Walking Right`,
    200,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    animation.runImageAnimation(
    mySprite,
    assets.animation`Walking Left0`,
    200,
    true
    )
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    animation.runImageAnimation(
    mySprite,
    assets.animation`Walking Right0`,
    200,
    true
    )
})
function water () {
    tileUtil.replaceAllTiles(assets.tile`Water High2`, assets.tile`Water High1`)
    tileUtil.replaceAllTiles(assets.tile`Water Low0`, assets.tile`Water Low2`)
    pause(800)
    tileUtil.replaceAllTiles(assets.tile`Water High1`, assets.tile`Water High2`)
    tileUtil.replaceAllTiles(assets.tile`Water Low2`, assets.tile`Water Low0`)
    pause(800)
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    animation.runImageAnimation(
    mySprite,
    assets.animation`Walking Left`,
    200,
    true
    )
})
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`myImage0`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
tiles.setCurrentTilemap(tilemap`level1`)
scene.cameraFollowSprite(mySprite)
mySprite.ay = 300
forever(function () {
    water()
})
