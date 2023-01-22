import { ResponsiveBullet } from '@nivo/bullet'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

function Barchart() {
    const MyResponsiveBullet = (

        { data  }) => (
        <ResponsiveBullet
            data={data}
            margin={{ top: 50, right: 90, bottom: 50, left: 90 }}
            spacing={36}
            titleAlign="start"
            titleOffsetX={13}
            titleOffsetY={20}
            rangeBorderColor={{ from: 'color', modifiers: [] }}
            measureSize={0}
            markerSize={0}
            animate={false}
        />
    )
    
    return (
        <div>
            <MyResponsiveBullet />
        </div>
    );
}


export default Barchart;