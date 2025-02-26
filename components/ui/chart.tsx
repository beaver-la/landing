"use client"

import type * as React from "react"
import { AxisBottom, AxisLeft } from "@visx/axis"
import { Grid } from "@visx/grid"
import { Group } from "@visx/group"
import { scaleBand, scaleLinear } from "@visx/scale"
import { Bar } from "@visx/shape"
import { TooltipWithBounds, useTooltip } from "@visx/tooltip"

import { cn } from "@/lib/utils"

interface ChartProps extends React.HTMLAttributes<HTMLDivElement> {
  data: { name: string; value: number }[]
}

export function Chart({ className, data, ...props }: ChartProps) {
  const width = 400
  const height = 300
  const margin = { top: 20, right: 20, bottom: 40, left: 40 }

  const xMax = width - margin.left - margin.right
  const yMax = height - margin.top - margin.bottom

  const x = (d: { name: string }) => d.name
  const y = (d: { value: number }) => d.value

  const xScale = scaleBand<string>({
    range: [0, xMax],
    round: true,
    domain: data.map(x),
    padding: 0.4,
  })

  const yScale = scaleLinear<number>({
    range: [yMax, 0],
    round: true,
    domain: [0, Math.max(...data.map(y))],
  })

  const { tooltipData, tooltipLeft, tooltipTop, tooltipOpen, showTooltip, hideTooltip } = useTooltip()

  return (
    <div className={cn("", className)} {...props}>
      <svg width={width} height={height}>
        <Group left={margin.left} top={margin.top}>
          <Grid xScale={xScale} yScale={yScale} width={xMax} height={yMax} stroke="currentColor" strokeOpacity={0.1} />
          <AxisBottom
            top={yMax}
            scale={xScale}
            tickLabelProps={{
              fill: "currentColor",
              fontSize: 11,
              textAnchor: "middle",
            }}
          />
          <AxisLeft
            scale={yScale}
            tickLabelProps={{
              fill: "currentColor",
              fontSize: 11,
              textAnchor: "end",
            }}
          />
          {data.map((d) => {
            const barWidth = xScale.bandwidth()
            const barHeight = yMax - (yScale(y(d)) ?? 0)
            const barX = xScale(x(d))
            const barY = yMax - barHeight
            return (
              <Bar
                key={`bar-${x(d)}`}
                x={barX}
                y={barY}
                width={barWidth}
                height={barHeight}
                fill="currentColor"
                onMouseLeave={() => hideTooltip()}
                onMouseMove={() => {
                  const top = barY + margin.top
                  const left = (barX ?? 0) + barWidth / 2 + margin.left
                  showTooltip({
                    tooltipData: d,
                    tooltipTop: top,
                    tooltipLeft: left,
                  })
                }}
              />
            )
          })}
        </Group>
      </svg>
      {tooltipOpen && tooltipData && (
        <TooltipWithBounds top={tooltipTop} left={tooltipLeft}>
          <div className="text-sm">
            <span className="font-bold">{x(tooltipData as any)}</span>
            <span className="ml-2">{y(tooltipData as any)}</span>
          </div>
        </TooltipWithBounds>
      )}
    </div>
  )
}

