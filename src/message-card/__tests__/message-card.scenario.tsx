/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { colors } from '../../tokens';
import { MessageCard } from '..';
import { BUTTON_KIND } from '../constants';
import deliveryHeroItalianSvg from './images/deliveryHeroItalian.svg';
import deliveryHeroItalianPng from './images/deliveryHeroItalian@3x.png';
import deliveryLargeStrawberriesSvg from './images/deliveryLargeStrawberries.svg';
import deliveryLargeStrawberriesPng from './images/deliveryLargeStrawberries@3x.png';
import earnerLargeRiderDriverSvg from './images/earnerLargeRiderDriver.svg';
import earnerLargeRiderDriverPng from './images/earnerLargeRiderDriver@3x.png';

export function Scenario() {
  const containerStyle = {
    padding: '16px',
    width: '440px',
  };
  const rowStyle = {
    display: 'flex',
    marginBottom: '32px',
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={rowStyle}>
        <div style={containerStyle}>
          <MessageCard
            heading="Heading"
            paragraph="ipsum lorem dopem topo logic hippos bananas and the rest"
            buttonLabel="Save now"
            image={{
              src: deliveryHeroItalianSvg,
              ariaLabel: 'Illustration of an Italian meal with pizza and pasta on a picnic table',
            }}
            onClick={() => console.log('Saved')}
            backgroundColor={colors.red200}
          />
        </div>
        <div style={containerStyle}>
          <MessageCard
            paragraph="ipsum lorem dopem topo logic hippos bananas and the rest"
            buttonLabel="Save now"
            image={{ src: deliveryLargeStrawberriesSvg, ariaLabel: 'Illustration of strawberries' }}
            onClick={() => console.log('Saved')}
          />
        </div>
        <div style={containerStyle}>
          <MessageCard
            heading="Heading"
            paragraph="ipsum lorem dopem topo logic hippos bananas and the rest"
            image={{
              src: earnerLargeRiderDriverSvg,
              ariaLabel: 'A car with a driver and a passenger both wearing masks',
            }}
            onClick={() => console.log('Saved')}
            backgroundColor={colors.blue300}
          />
        </div>
      </div>

      <div style={rowStyle}>
        <div style={containerStyle}>
          <MessageCard
            heading="Heading"
            paragraph="ipsum lorem dopem topo logic hippos bananas and the rest"
            buttonLabel="Save now"
            buttonKind={BUTTON_KIND.tertiary}
            image={{
              src: deliveryHeroItalianPng,
              ariaLabel: 'Illustration of an Italian meal with pizza and pasta on a picnic table',
            }}
            onClick={() => console.log('Saved')}
            backgroundColor={colors.green300}
          />
        </div>
        <div style={containerStyle}>
          <MessageCard
            paragraph="ipsum lorem dopem topo logic hippos bananas and the rest"
            buttonLabel="Save now"
            buttonKind={BUTTON_KIND.tertiary}
            image={{ src: deliveryLargeStrawberriesPng, ariaLabel: 'Illustration of strawberries' }}
            onClick={() => console.log('Saved')}
            backgroundColor={colors.white}
          />
        </div>
        <div style={containerStyle}>
          <MessageCard
            heading="Heading"
            paragraph="ipsum lorem dopem topo logic hippos bananas and the rest"
            image={{
              src: earnerLargeRiderDriverPng,
              ariaLabel: 'A car with a driver and a passenger both wearing masks',
            }}
            onClick={() => console.log('Saved')}
            backgroundColor={colors.purple300}
          />
        </div>
      </div>

      <div style={rowStyle}>
        <div style={containerStyle}>
          <MessageCard
            heading="Heading"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            buttonLabel="Make it happen"
            image={{
              src: deliveryHeroItalianSvg,
              ariaLabel: 'Illustration of an Italian meal with pizza and pasta on a picnic table',
            }}
            onClick={() => console.log('Made it happen')}
            backgroundColor={colors.magenta700}
          />
        </div>
        <div style={containerStyle}>
          <MessageCard
            paragraph="ipsum lorem dopem topo logic hippos bananas and the rest"
            buttonLabel="Go!"
            image={{ src: deliveryLargeStrawberriesSvg, ariaLabel: 'Illustration of strawberries' }}
            onClick={() => console.log('Gone')}
            backgroundColor={colors.teal500}
          />
        </div>
        <div style={containerStyle}>
          <MessageCard
            heading="Much longer heading"
            paragraph="ipsum lorem dopem topo logic hippos bananas and the rest"
            image={{
              src: earnerLargeRiderDriverSvg,
              ariaLabel: 'A car with a driver and a passenger both wearing masks',
            }}
            onClick={() => console.log('Gone')}
            backgroundColor={colors.yellow700}
          />
        </div>
      </div>

      <div style={rowStyle}>
        <div style={containerStyle}>
          <MessageCard
            heading="Much longer heading"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            buttonLabel="Make it happen"
            buttonKind={BUTTON_KIND.tertiary}
            image={{
              src: deliveryHeroItalianPng,
              ariaLabel: 'Illustration of an Italian meal with pizza and pasta on a picnic table',
            }}
            onClick={() => console.log('Made it happen')}
            backgroundColor={colors.orange600}
          />
        </div>
        <div style={containerStyle}>
          <MessageCard
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            buttonLabel="Go!"
            buttonKind={BUTTON_KIND.tertiary}
            image={{ src: deliveryLargeStrawberriesPng, ariaLabel: 'Illustration of strawberries' }}
            onClick={() => console.log('Gone')}
            backgroundColor={colors.red700}
          />
        </div>
        <div style={containerStyle}>
          <MessageCard
            heading="Much longer heading"
            paragraph="ipsum lorem dopem topo logic hippos bananas and the rest"
            image={{
              src: earnerLargeRiderDriverPng,
              ariaLabel: 'A car with a driver and a passenger both wearing masks',
            }}
            onClick={() => console.log('Gone')}
            backgroundColor={colors.cobalt700}
          />
        </div>
      </div>
    </div>
  );
}
